import { prisma } from "./db";

export default function getAllTags() {
    return prisma.tags.findMany({
        orderBy: [
            {
                title: 'asc'
            },
            {
                createdAt: 'asc'
            }
        ],
    })
}