import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = parseInt(context.params.id);
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  return Response.json(post);
}
