"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addComment(formData: FormData) {
  const rawFormData = {
    message: (formData.get("message") || "").toString(),
    slug: "slug",
    userId: 1,
    postId: (formData.get("postId") || "1").toString(),
  };

  const result = await prisma.comment.create({
    data: {
      ...rawFormData,
      postId: parseInt(rawFormData.postId),
    },
  });
}
