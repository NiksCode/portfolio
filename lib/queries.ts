import { prisma } from "./prisma";

export const getProjects = await prisma.project.findMany({

})
