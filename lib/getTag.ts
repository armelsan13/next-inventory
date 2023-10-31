import { prisma } from "./db";

export default function getTag( id : string) {
    return prisma.tags.findUnique({
        where: {
            id: id
        }
    })
}