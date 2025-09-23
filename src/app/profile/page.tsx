"use client";

import React,{useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { toast } from "react-hot-toast";



export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const onLogout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:unknown) {
            if (error instanceof AxiosError) {
                console.log(error.message);
                toast.error(error.message)
            }
        }
    }
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
            <h1>Profile Page</h1>
            <p>This is the profile page.</p>
            <h2 className="p-1 rounded bg-orange-500">
                {data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
            </h2>
            <hr />
            <button 
                onClick={onLogout}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
                    Logout
            </button>
            <button
                onClick={getUserDetails}
                className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >GetUser Details
            </button>
        </div>
    );
}