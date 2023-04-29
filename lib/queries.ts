import { prisma } from "./prisma";

export const getProjects = async () => {
  const projects = await prisma.project.findMany({
    include: {
      tools: true,
    }
  });
  return projects;
};



