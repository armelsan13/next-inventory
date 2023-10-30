import { prisma } from "@/lib/db"
import getAllTags from "@/lib/getAllTags"
import { redirect } from "next/navigation"

async function createTag(data: FormData) {
    const title = data.get('title')?.valueOf()
    const description = data.get('description')

    if(typeof title !== 'string' || title.length === 0) {
        throw new Error("Invalid");
        
    }

    await prisma.equipments.create({data: {}})

    redirect('/inventory')
}

export default async function Form() {
    const tags = await getAllTags()
    return (
        <form className="w-full" action=''>
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
            <select className="select select-bordered w-full mb-4">
            <option disabled selected>Set Tag</option>
                {tags.map(tag => (
                    <option key={tag.id} value={tag.id}>{tag.title}</option>
                ))}
            </select>
            <button
                type="submit"
                className="btn btn-primary w-full"
            >
                Create
            </button>
        </form>
    )
}