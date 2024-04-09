import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function PostSkeleton() {
  return (
    <Box padding="6" boxShadow="lg" bg="white" height={"400px"}>
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  );
}
