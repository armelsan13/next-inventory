import { prisma } from "./db";

export default function getEquipment( id : string) {
    return prisma.equipments.findUnique({
        where: {
            id: id
        },
        include: {
            tags: true
        }
    })
}