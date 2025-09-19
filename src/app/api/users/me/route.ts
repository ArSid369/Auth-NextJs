import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        //find user by id, exclude password and __v
        if (!userId) {
            return NextResponse.json({message: "Unauthorized"}, {status: 401});
        }
        //find user by id from database
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "User found",
            success: true,
            data: user,
        });
    } catch (error: any) {
        NextResponse.json({error: error.message}, {status: 500});
    }
}