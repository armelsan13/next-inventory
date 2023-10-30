import { isLogged } from "../api/auth/[...nextauth]/auth";

export default async function Dashboard() {
    await isLogged();

    return (
        <div className='w-full flex flex-col min-h-screen py-2'>
            <p>Dashboard</p>
        </div>
    );
}