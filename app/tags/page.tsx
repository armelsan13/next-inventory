import getAllTags from "@/lib/getAllTags";
import { isLogged } from "../api/auth/[...nextauth]/auth";
import { TagItem } from "./components/TagItem";
import Link from "next/link";

export default async function Tags() {
    await isLogged();

    const tags = await getAllTags()

    return (
        <div className='w-full flex flex-col min-h-screen py-2 mt-5'>
            <div className="w-full flex flex-row items-center justify-center">
                <div className="flex-1"><h1 className="text-2xl">Tags</h1></div>
                <div className="flex-none"><a href="/tags/new" className="btn btn-primary btn-sm w-[5rem]">ADD</a></div>
            </div>
            <hr className="h-[0.1rem] my-2 bg-gray-400" />
            <div className="mt-5 pl-5">
                {tags.map(tag => (
                    <Link key={tag.id} href={`/tags/new/${tag.id}`}><TagItem {...tag} /></Link>
                ))}
            </div>
        </div>
    );
}