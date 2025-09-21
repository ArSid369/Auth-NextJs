import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = ((path === '/login') || (path === '/signup') || (path === '/verifyemail') || (path === '/forgotPassword') || (path.startsWith('/resetpassword')));

    //get token from cookies
    //it retrieves token value from cookies, if not found assigns empty string
    const token = request.cookies.get('token')?.value || '';
    
    //if user is logged in and tries to access login or signup page, redirect to home page
    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/profile', request.nextUrl));
    }

    //if user is not logged in and tries to access protected route, redirect to login page
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
}

export const config = {
    matcher: [
        '/',
        '/profile',
        '/profile/:path*',
        '/login',
        '/signup',
        '/verifyemail',
        '/forgotPassword',
        '/resetpassword/:path*',
    ]
}