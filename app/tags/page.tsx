import getAllTags from "@/lib/getAllTags";
import { isLogged } from "../api/auth/[...nextauth]/auth";
import { TagItem } from "./components/TagItem";

export default async function Tags() {
    await isLogged();

    const tags = await getAllTags()

    return (
        <div className='w-full flex flex-col min-h-screen py-2 mt-5'>
            <h1 className="text-2xl">Tags</h1>
            <ul className="list-disc mt-5 pl-5">
                {tags.map(tag => (
                    <TagItem key={tag.id} {...tag} />
                ))}
            </ul>
        </div>
    );
}