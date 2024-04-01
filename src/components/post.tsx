import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  IconButton,
  Text,
  Box,
  Avatar,
  Image,
  Button,
} from "@chakra-ui/react";
export default function Post({ post }) {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" />
            <Box>
              <Heading size="sm">{post.title}</Heading>
              <Text>Username</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{post.body}</Text>
      </CardBody>
      <Image objectFit="cover" src={post.image} alt="Chakra UI" />
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button flex="1" variant="ghost">
          Like
        </Button>
        <Button flex="1" variant="ghost">
          Comment
        </Button>
      </CardFooter>
    </Card>
  );
}
