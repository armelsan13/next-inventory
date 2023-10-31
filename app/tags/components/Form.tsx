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

async function updateTag(data: FormData) {
    'use server'
    
    const title = data.get('title')?.valueOf()
    
    if(typeof title !== 'string' || title.length === 0) {
        throw new Error("Invalid Title");
    }

    await prisma.tags.update({
        where: {
            id: data.get('id') as string
        },
        data: {title}
    })

    redirect('/tags')
}

type Tag = {
    id: string,
    title: string
} | null

type Props = {
    tag?: Tag
    btnText: string | null
}


export default function Form( {tag, btnText} : Props ) {
    
    return (
        <form className="w-full" action={btnText !== 'Update' ? (createTag) : (updateTag) }>
            <input type="hidden" name="id" defaultValue={tag?.id} />
            <input
                type="text"
                name="title"
                defaultValue={tag?.title}
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