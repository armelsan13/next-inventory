import { title } from "process";
import { prisma } from "./db";

export default function getAllEquipments() {
    return prisma.equipments.findMany({
        orderBy: [
            {
                title: 'asc'
            },
            {
                createdAt: 'asc'
            }
        ],
        include: {
            tags: true
        }
    })
}