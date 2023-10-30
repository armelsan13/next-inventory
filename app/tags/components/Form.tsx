import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"

// async function createTag(data: FormData) {
//     'use server'
    
//     const title = data.get('title')?.valueOf()

//     if(typeof title !== 'string' || title.length === 0) {
//         throw new Error("Invalid");
        
//     }

//     await prisma.tags.create({data: {title}})

//     redirect('/tags')
// }

export default function Form() {
    
    return (
        <form className="w-full" action=''>
            <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="w-full px-4 py-4 mb-3 border border-gray-300 rounded-[1rem]"
            />
            <textarea
                name="description"
                className="w-full px-4 py-4 mb-3 border border-gray-300 rounded-[1rem]"
            ></textarea>
            <button
                type="submit"
                className="btn btn-primary w-full"
            >
                Create
            </button>
        </form>
    )
}