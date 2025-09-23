"use client"

import React,{useEffect} from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function ResetPasswordPage( ) {
    const Router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({
        token: "",
        password: "",
    });

    useEffect(() => {
        //Grab forgotpasswordtoken from URL
        //useeffect refreshes every time the page loads

        //console.log(window.location.search);
        //const token = window.location.search.split('=')[1];
        
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if(token) {
            setUser(prevUser => ({...prevUser, token}));
        }
        console.log(token);
        
    }, []);

    const resetPassword = async () => {
        try {
            setLoading(true);
            const resposne = await axios.post('/api/users/resetpassword', {fwptoken: user.token, npw: user.password});
            console.log("Response: ",resposne.data);
            toast.success("Password reset successful");
            Router.push('/login');
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message || "Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
             <hr />
             <label htmlFor="email" className="text-2xl">Enter New Password</label>
             <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
                type="password"
                placeholder="Enter new Password"
                value= {user.password}
                onChange = {(e) => setUser({...user, password: e.target.value})}
            />
            <button
                onClick={resetPassword}
                className="bg-blue-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
            >
                {loading ? "Processing..." : "Reset Password"}
            </button>
            <a 
                className="text-blue-500 hover:underline mt-4"
                href="/login"
            >Go to Login</a>
        </div>
    );
}