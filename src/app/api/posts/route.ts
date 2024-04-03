import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const { title, body, image } = await req.json();

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

  return Response.json(result);
}

export async function GET() {
  const posts = await prisma.post.findMany();

  return Response.json(posts);
}
