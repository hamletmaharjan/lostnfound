import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  const id = parseInt(context.params.id);
  const comments = await prisma.comment.findMany({
    where: {
      postId: id,
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return Response.json(comments);
}
