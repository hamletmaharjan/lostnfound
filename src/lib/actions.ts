"use server";

import { z } from "zod";
import { PrismaClient } from "@prisma/client";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

const CommentSchema = z.object({
  message: z.string(),
  postId: z.coerce.number(),
});

export async function addComment(formData: FormData) {
  const { message, postId } = CommentSchema.parse({
    message: formData.get("message"),
    postId: formData.get("postId"),
  });
  const rawFormData = {
    message,
    slug: "slug",
    userId: 1,
    postId,
  };

  await prisma.comment.create({
    data: {
      ...rawFormData,
      postId,
    },
  });

  revalidatePath("/posts/" + postId);
}
