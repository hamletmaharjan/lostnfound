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

async function getData(id) {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/${id}`, {
    cache: "no-store",
  });
  //   console.log("here", res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// export function PostDetailSkeleton () {
//     return ()
// }

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const post = await getData(params.id);

  return (
    <Card>
      <CardHeader>
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

          <Box>
            <Heading size="sm">{post.title}</Heading>
            <Text>username</Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{post.body}</Text>
      </CardBody>
      <Image objectFit="cover" src={post.image} alt="Chakra UI" />
    </Card>
  );
}
