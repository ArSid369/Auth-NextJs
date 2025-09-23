import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export function getDataFromToken(request: NextRequest) {
    try {
        //fetch token from cookies
        const token = request.cookies.get('token')?.value || '';
        //convert token to user object
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
        //return user id
        return decodedToken.id;
    } catch (e: unknown) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
        throw new Error("An unknown error occurred");
    }
}