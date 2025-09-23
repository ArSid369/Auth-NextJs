"use client"

import axios, { AxiosError } from "axios";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";



export default function VerifyEmailPage() {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const VerifyUserEmail = useCallback(async () => {
        try {
            await axios.post('/api/users/verifyEmail', {token});
            setVerified(true);
        } catch (error: unknown) {
            setError(true);
            if (error instanceof AxiosError) {
                console.log(error.response?.data?.message);
            }
        }
    }, [token]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlToken = params.get('token');
        if(urlToken) {
            setToken(urlToken || "");
        }
    }, []);

    useEffect(() => {
        if(token.length > 0) {
            VerifyUserEmail();
        }
    }, [token, VerifyUserEmail]);


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Verify Email</h1>
            <h2
                className="text-2xl font-semibold mb-4 bg-orange-500"
            >{token ? `${token}` : "no token" }</h2>

            {verified && (
                <div className="text-green-500 text-lg mb-4">
                    Your email has been verified successfully. You can now 
                    <Link 
                        href="/login" 
                        className="text-blue-500 underline"
                    >
                        login
                    </Link>.
                </div>
            )}

            {error && (
                <div className="text-red-500 text-lg mb-4">
                    There was an error verifying your email. 
                </div>
            )}
        </div>
    )

}