"use client"
import link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function login() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [disabled, setButtonDisabled] = useState(false);

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else { setButtonDisabled(true); }
    }, [user]);

    //login function
    const onLogin = async () => {
        try {
            setLoading(true);
            //send to backend
            const response = await axios.post('/api/users/login', user);
            console.log("Login success", response.data);
            toast.success("Login successful");
            //redirect to home page
            router.push('/profile');

        } catch (e: any) {
            const errorMsg = e.response?.data?.error || e.message;
            console.log("Login error: ", errorMsg);
            toast.error(errorMsg);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-bold mb-4">{loading ? "Processing" : "Login"}</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email" 
                />
            <label htmlFor="password">password</label>
            <input 
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
                />
            <button 
                onClick={onLogin}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {disabled ? "Enter Details" : "Login"}
            </button>
            <label>New User?</label>
            <a 
                className="text-blue-500 hover:underline mt-4"
                href="/signup"
            >Signup</a>
            <a 
                className="text-blue-500 hover:underline mt-4"
                href="/forgotPassword"
            >Forgot Password?</a>
        </div>
    )
}
