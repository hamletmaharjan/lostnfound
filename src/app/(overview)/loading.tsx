import {
  Box,
  Card,
  Grid,
  GridItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import PostSkeleton from "../../components/posts/post-skeleton";

export default function Loading() {
  // return <div>Loading...</div>;
  return (
    <Box maxWidth={"1080px"} marginX="auto" mt="40px">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <PostSkeleton />
        </GridItem>
        <GridItem>
          <PostSkeleton />
        </GridItem>
        <GridItem>
          <PostSkeleton />
        </GridItem>
        <GridItem>
          <PostSkeleton />
        </GridItem>
        <GridItem>
          <PostSkeleton />
        </GridItem>
        <GridItem>
          <PostSkeleton />
        </GridItem>
      </Grid>
    </Box>
  );
}
