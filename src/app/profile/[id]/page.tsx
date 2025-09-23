

interface UserProfileProps {
    params: {
        id: string;
    };
}

export default async function UserProfile({params}: UserProfileProps) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2"> 
            <h1>Profile Page</h1>
            <hr />
            <p className="text-4xl">Profile page for {await params.id}</p>
        </div>
    );
}


