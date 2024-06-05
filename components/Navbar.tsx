import { authConfigs } from "@/app/api/auth/[...nextauth]/auth"
import { getServerSession } from "next-auth"
import { LogoutButton } from "./authButtons"

export default async function Navbar() {
    const session = await getServerSession(authConfigs)

    const content = (
        <div className="w-full flex flex-row">
            <div className="navbar bg-base-100 dark:text-gray-900">
                <div className="brand flex-none px-2 mx-2">
                    <span className="text-lg font-bold">BRAND</span>
                </div>
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" href="/dashboard">Dashboard</a>
                    <a className="btn btn-ghost normal-case text-xl" href="/inventory">Inventory</a>
                    <a className="btn btn-ghost normal-case text-xl" href="/tags">Tags</a>
                    <a className="btn btn-ghost normal-case text-xl" href="/bookings">Bookings</a>
                </div>
                <div className="flex-none gap-2">
                    {session?.user?.email ? (
                        <span className="text-gray-500">{session?.user?.email}</span>
                        ) : (<></>)
                    }
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className={`btn btn-ghost ${session?.user?.image ? 'btn-circle' : ''} avatar`}>
                            {session?.user?.image ? (
                                <div className="w-10 rounded-full">
                                    <img src={session?.user?.image} />
                                </div>
                            ) : (<span className="text-lg">{session?.user?.name}</span>)}
                        </label>


                        
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            <li><LogoutButton /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

    if (session) return content
    else return (<></>)
}