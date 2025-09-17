import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function getDataFromToken(request: NextRequest) {
    try {
        //fetch token from cookies
        const token = request.cookies.get('token')?.value || '';
        //convert token to user object
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        //return user id
        return decodedToken.id;
    } catch (e: any) {
        throw new Error(e.message);
    }
}