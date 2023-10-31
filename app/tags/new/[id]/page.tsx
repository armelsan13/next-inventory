import Form from "@/app/tags/components/Form"

export default function UpdateTag() {
    return (
        <>
            <div className="w-3/12 mx-auto flex flex-col items-center justify-center min-h-screen">
                <h3 className="mb-5 text-2xl">Create Update Tag</h3>
                <Form btnText='Update'/>
                <a href="/tags" className="btn btn-outline w-full mt-2">Cancel</a>
            </div>
        </>
    )
}