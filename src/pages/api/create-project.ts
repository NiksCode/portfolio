import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, content, image, code, demo } = req.body;
    const result = await prisma.project.create({
      data: {
        title: title,
        content: content,
        image: image,
        code: code,
        demo: demo,
      },
    });
    res.json(result);
  } else res.redirect(307, "/").end();
}