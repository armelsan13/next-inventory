import { prisma } from "@/lib/db"
import { redirect } from "next/navigation"

async function createTag(data: FormData) {
    'use server'
    
    const title = data.get('title')?.valueOf()

    if(typeof title !== 'string' || title.length === 0) {
        throw new Error("Invalid Title");
    }

    await prisma.tags.create({data: {title}})

    redirect('/tags')
}

type ButtonProp = {
    btnText: string | null
}

export default function Form( {btnText} : ButtonProp ) {
    
    return (
        <form className="w-full" action={createTag}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                required
                className="w-full px-4 py-4 mb-3 border border-gray-300 rounded-[1rem]"
            />
            <button
                type="submit"
                className="btn btn-primary w-full"
            >
                {btnText}
            </button>
        </form>
    )
}