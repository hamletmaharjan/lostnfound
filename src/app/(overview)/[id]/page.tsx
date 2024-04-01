import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Suspense } from "react";

import { PostSkeleton } from "../loading";
import PostDetail from "../../../components/posts/post-detail";
import CommentList, {
  CommmentsSkeleton,
} from "../../../components/posts/comment-list";

async function getData(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${id}`, {
    cache: "no-store",
  });
  // console.log("here", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  // const post = await getData(params.id);
  // console.log("params", post);
  return (
    <Box maxW="800px" mb={"60px"}>
      <Suspense fallback={<PostSkeleton />}>
        <PostDetail params={params} />
      </Suspense>

      <Box mt={"24px"} p="12px">
        <Suspense fallback={<CommmentsSkeleton />}>
          <CommentList params={params} />
        </Suspense>
      </Box>
    </Box>
  );
}

export const dynamic = "force-dynamic";
