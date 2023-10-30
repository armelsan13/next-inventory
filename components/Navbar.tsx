import { authConfigs } from "@/app/api/auth/[...nextauth]/auth"
import { getServerSession } from "next-auth"
import { LogoutButton } from "./authButtons"

export default async function Navbar() {
    const session = await getServerSession(authConfigs)

    let name = session?.user?.name;
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let initials = session ? [...name.matchAll(rgx)] || [] : [];

    initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

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
                </div>
                <div className="flex-none gap-2">
                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {session?.user?.image ? (
                                <div className="w-10 rounded-full">
                                    <img src={session?.user?.image} />
                                </div>
                            ) : (<span className="text-2xl">{initials}</span>)}
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