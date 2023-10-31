import Form from "@/app/tags/components/Form"

export default function NewTag() {
    return (
        <>
            <div className="w-3/12 mx-auto flex flex-col items-center justify-center min-h-screen">
                <h3 className="mb-5 text-2xl">Create New Tag</h3>
            <Form btnText='New' />
            <a href="/tags" className="btn btn-outline w-full mt-2">Cancel</a>
            </div>
        </>
    )
}