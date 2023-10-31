import Form from "@/app/tags/components/Form"
import getTag from "@/lib/getTag"

interface Props {
    params: {
        id: string
    }
}

export default async function UpdateTag( { params } : Props) {

    const tag = await getTag(params.id)

    return (
        <>
            <div className="w-3/12 mx-auto flex flex-col items-center justify-center min-h-screen">
                <h3 className="mb-5 text-2xl">Update Tag Detail</h3>
                <Form tag={tag}  btnText='Update' />
                <a href="/tags" className="btn btn-outline w-full mt-2">Cancel</a>
            </div>
        </>
    )
}