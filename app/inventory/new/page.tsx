import Form from "@/app/inventory/components/Form"
import { prisma } from "@/lib/db"

export default async function NewEquipment() {
    return (
        <>
            <div className="w-3/12 mx-auto flex flex-col items-center justify-center min-h-screen">
                <h3 className="mb-5 text-2xl">Create New Equipment</h3>
            <Form />
            <a href="/inventory" className="btn btn-outline w-full mt-2">Cancel</a>
            </div>
        </>
    )
}