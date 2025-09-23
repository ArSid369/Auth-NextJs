import { connect } from '@/dbConfig/dbConfig';
import { NextRequest,NextResponse } from 'next/server';
import User from '@/models/userModel';


connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        //extract token from reqBody
        const {token} = reqBody;
        console.log(token);

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});
        if(!user) {
            return NextResponse.json({message: "Invalid or expired token"}, {status: 400});
        }

        console.log(user);

        //update user to verify true and remove token fields
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;

        await user.save()

        return NextResponse.json({message: "Email verified successfully"}, {status: 200});

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({message: error.message}, {status: 500});
        }
        return NextResponse.json({message: "An unknown error occurred"}, {status: 500});
    }
}