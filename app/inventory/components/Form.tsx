import { prisma } from "@/lib/db"
import getAllTags from "@/lib/getAllTags"
import { redirect } from "next/navigation"

async function createTag(data: FormData) {
    'use server'
    
    const title = data.get('title')?.valueOf()
    const description = data.get('description')

    if(typeof title !== 'string' || title.length === 0) {
        throw new Error("Invalid Title");
    }

    await prisma.equipments.create({data: {
        title: title, 
        description: data.get('description') as string | null,
        tagId: data.get('tag') as string
    }})

    redirect('/inventory')
}

type ButtonProp = {
    btnText: string | null
}

export default async function Form( {btnText} : ButtonProp ) {
    const tags = await getAllTags()
    return (
        <form className="w-full" action={createTag}>
            {/* <label htmlFor="title">Title</label> */}
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                required
                className="w-full px-4 py-4 mb-1 border border-gray-300 rounded-[1rem]"
            />
            {/* <label htmlFor="description">Description</label> */}
            <textarea
                name="description"
                id="description"
                
                className="w-full px-4 py-4 border border-gray-300 rounded-[1rem]"
                placeholder="Description"
                rows={10}
            ></textarea>
            <select name="tag" defaultValue='0' className="select select-bordered w-full mb-4">
            <option disabled>Set Tag</option>
                {tags.map(tag => (
                    <option key={tag.id} value={tag.id}>{tag.title}</option>
                ))}
            </select>
            <button
                type="submit"
                className="btn btn-primary w-full"
            >
                {btnText}
            </button>
        </form>
    )
}