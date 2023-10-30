import { prisma } from "./db";

export default function getAllEquipments() {
    return prisma.equipments.findMany({
        include: {
            tags: true
        }
    })
}