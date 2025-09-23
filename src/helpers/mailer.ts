import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

interface SendEmailProps {
    email: string;
    emailType: "VERIFY" | "RESET";
    userId: string;
}

export const sendEmail = async ({email, emailType, userId} : SendEmailProps) => {
    try {
        //create a hashed token from userId
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        //find by Id and update values of user in db
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
            verifyToken: hashedToken,
            verifyTokenExpiry: Date.now() + 3600000 //1hr
        })
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
            forgotPasswordToken: hashedToken,
            forgotPasswordTokenExpiry: Date.now() + 3600000 //1hr
        })
        }

        //send email
        const transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 2525,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            }
        });

        const mailOptions = {
            from: process.env.MY_EMAIL,
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyEmail" : "resetpassword"}?token=${hashedToken}" >here</a> to ${emailType === "VERIFY" ? "Verify your email" : "Reset your password"} or copy and paste this link in your browser: ${process.env.domain}/${emailType === "VERIFY" ? "verifyEmail" :"resetpassword" }?token=${hashedToken}</p>`
        };

        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;
    } 
    catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Email sending error:', error);
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred while sending email");
    }
}