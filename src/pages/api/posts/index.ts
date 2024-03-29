import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { title, body, image } = req.body;
    const result = await prisma.post.create({
      data: {
        title: title,
        body,
        userId: 1,
        status: "live",
        image: image,
        isDeleted: false,
      },
    });
    return res.status(201).json(result);
  } else {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  }
}
