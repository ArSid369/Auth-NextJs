//handle data submitted on signup page


import {connect} from '@/dbConfig/dbConfig';
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from '@/helpers/mailer';


connect();

export async function POST(request: NextRequest) {
    try {
        //client to server
        const reqBody = await request.json();
        const {username, email, password} = reqBody;
        console.log(reqBody);

        //check if user already exists
        //server to db
        const user = await User.findOne({email});

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400});
        }

        //hash password, API call
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User ({
            username,
            email,
            password: hashedPassword,
        });

        //save new user to db, server to db 
        const saveUser = await newUser.save()
        console.log(saveUser)

        //send verification email
        await sendEmail({
            email, 
            emailType: "RESET", 
            userId: saveUser._id
        });

        //server to client

        return NextResponse.json({
            message: "Users created successfuly",
            success: true,
            saveUser,
        });


    } catch(error: any) {
        return NextResponse.json({error: error.message},{status: 500});
    }
}