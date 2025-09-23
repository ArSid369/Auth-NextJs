
import {NextResponse} from "next/server";


export async function GET() {
    try {
        //NextResponse has access to cookies, used to create response object
        const response = NextResponse.json({
            message: "Logout successful",
            success: true,
        });

        //clear cookie by setting token to empty string and expiry date to past date
        response.cookies.set("token", "", {httpOnly: true, expires: new Date(0)});

        return response;

    } catch (error: unknown) {
        if (error instanceof Error) {
            return NextResponse.json({error: error.message},{status: 500});
        }
        return NextResponse.json({error: "An unknown error occurred"},{status: 500});
    }
}