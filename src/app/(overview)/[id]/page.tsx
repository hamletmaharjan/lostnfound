import { Box } from "@chakra-ui/react";
import { Suspense } from "react";

import { PostSkeleton } from "../loading";
import PostDetail from "../../../components/posts/post-detail";
import CommentList, {
  CommmentsSkeleton,
} from "../../../components/posts/comment-list";
import CommentInput from "../../../components/posts/comment-form";

export default function Page({ params }: { params: { id: string } }) {
  // const post = await getData(params.id);
  // console.log("params", post);
  return (
    <Box maxW="800px" mb={"60px"}>
      <Suspense fallback={<PostSkeleton />}>
        <PostDetail params={params} />
      </Suspense>

      <Box mt={"24px"}>
        <CommentInput params={params} />
        <Suspense fallback={<CommmentsSkeleton />}>
          <CommentList params={params} />
        </Suspense>
      </Box>
    </Box>
  );
}

export const dynamic = "force-dynamic";
