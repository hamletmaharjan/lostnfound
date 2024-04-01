import {
  Box,
  Card,
  Grid,
  GridItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

export function PostSkeleton() {
  return (
    <Box padding="6" boxShadow="lg" bg="white" height={"400px"}>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
}

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
