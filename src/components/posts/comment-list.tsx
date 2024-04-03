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
  Skeleton,
} from "@chakra-ui/react";

async function getData(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${id}/comments`, {
    cache: "no-store",
  });
  //   console.log("here", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function CommmentsSkeleton() {
  return (
    <Stack mt="24px">
      <Skeleton height="48px" />
      <Skeleton height="48px" />
      <Skeleton height="48px" />
    </Stack>
  );
}

export default async function CommentList({
  params,
}: {
  params: { id: string };
}) {
  const comments = await getData(params.id);

  return (
    <Card mt="24px" p={"12px"}>
      <Stack>
        {comments.map((comment) => {
          return (
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="wrap"
              key={comment.id}
            >
              <Avatar name="Segun Adebayo" />

              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text>{comment.message}</Text>
              </Box>
            </Flex>
          );
        })}
      </Stack>
    </Card>
  );
}
