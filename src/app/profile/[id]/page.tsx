"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  isAdmin: boolean;
}

interface UserProfileProps {
  params: {
    id: string;
  };
}

export default function UserProfile({ params }: UserProfileProps) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log("Fetching user with ID:", params.id);
                // We will use the /api/users/me endpoint to get the current user's data. 
                // The [id] param is ignored.
                const response = await axios.get(`/api/users/me`);
                console.log("User data:", response.data.data);
                setUser(response.data.data);
            } catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                } else {
                    console.log(error);
                }
            }
        };

        fetchUser();
    }, [params.id]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
            <h1>Profile Page</h1>
            <hr />
            {user ? (
                <p className="text-4xl">Profile page for {user.username}</p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}