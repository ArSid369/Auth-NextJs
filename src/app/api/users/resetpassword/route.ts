import { connect } from '@/dbConfig/dbConfig';
import { NextRequest,NextResponse } from 'next/server';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {fwptoken, npw} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({forgotPasswordToken: fwptoken, forgotPasswordTokenExpiry: {$gt: Date.now()}});
        if(!user) {
            return NextResponse.json({message: "Invalid or expired token"}, {status: 400});
        }
        console.log(user);

        //hash password before saving
        const salt = await bcryptjs.genSalt(10);
        const hashnpw = await bcryptjs.hash(npw, salt);

        //update user password and remove token fields
        await User.updateOne(
            { _id: user._id },
            {
                $set: { password: hashnpw },
                $unset: { forgotPasswordToken: "", forgotPasswordTokenExpiry: "" }
            }
        );

        return NextResponse.json({message: "Password reset successfully"}, {status: 200});

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500});
        }
        return NextResponse.json({message: "An unknown error occurred"}, {status: 500});
    }
}