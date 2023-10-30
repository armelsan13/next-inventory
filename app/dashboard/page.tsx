import { isLogged, authConfigs } from "../api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth"
import UserCard from "@/components/UserCard";

export default async function Dashboard() {
    await isLogged();

    const session = await getServerSession(authConfigs)

    return (
        <div className='w-full flex flex-col items-center justify-center min-h-screen py-2'>
            {session ? (
                <UserCard user={session?.user} />
            ) : (
                <></>
            )}
        </div>
        
    );
}