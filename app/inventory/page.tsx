import getAllEquipments from "@/lib/getAllEquipments";
import { isLogged } from "../api/auth/[...nextauth]/auth"
import { EquipmentItem } from "./components/EquipmentItem";

export default async function Inventory() {
  await isLogged()

  const equipments = await getAllEquipments()

  return (
    <div className='w-full flex flex-col min-h-screen py-2 mt-5'>
      <div className="w-full flex flex-row items-center justify-center">
        <div className="flex-1"><h1 className="text-2xl">Equipments</h1></div>
        <div className="flex-none"><a href="/inventory/new" className="btn btn-primary btn-sm w-[5rem]">ADD</a></div>
      </div>
      <hr className="h-[0.1rem] my-2 bg-gray-400" />
      <div className="grid grid-cols-4 gap-4">
        {equipments.map(equipment => (
          <EquipmentItem key={equipment.id} {...equipment}/>
        ))}
      </div>
    </div>
  );
}