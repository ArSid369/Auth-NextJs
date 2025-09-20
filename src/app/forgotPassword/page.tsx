"use client"

import { set } from "mongoose";
import React,{ useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";


export default function ForgotPasswordPage() {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const [user, setUser] = React.useState({
        email: "",
    });

    const sendLink = async () => {
        setLoading(true);
        //call api to send reset link
        //mock api call
        const response = await axios.post('/api/users/forgotPassword', user);
        console.log(response.data);
        toast.success("Reset link sent. Check console.");
        setLoading(false);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
             <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
             <hr />
             <label htmlFor="email" className="text-2xl">email</label>
             <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
                id="email"
                type="text"
                value={user.email}
                placeholder="email"
                onChange={(e) => setUser({...user, email: e.target.value})}
            />
            <button
                onClick={sendLink}
                className="bg-blue-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
                {loading ? "Processing..." : "Send Reset Link"}
            </button>
            <label className="mt-4 text-sm text-gray-500">
                Note: This is a demo. The reset link will be logged in the console.
            </label>
            <a 
                className="text-blue-500 hover:underline mt-4"
                href="/login"
            >Go to Login</a>
        </div>
    );
}