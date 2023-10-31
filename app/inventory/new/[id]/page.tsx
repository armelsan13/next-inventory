import Form from "@/app/inventory/components/Form"
import getEquipment from "@/lib/getEquipment"

interface Props {
  params: {
    id: string
  }
}

export default async function UpdateEquipment( { params } : Props) {

  const equipment = await getEquipment(params.id)

    return (
        <>
            <div className="w-3/12 mx-auto flex flex-col items-center justify-center min-h-screen">
                <h3 className="mb-5 text-2xl">Update Equipment Details</h3>
            <Form equipment={equipment} btnText='Update' />
            <a href="/inventory" className="btn btn-outline w-full mt-2">Cancel</a>
            </div>
        </>
    )
}