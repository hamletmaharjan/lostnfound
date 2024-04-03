// "use client";
import { Button, Flex, Input } from "@chakra-ui/react";

import { addComment } from "../../lib/actions";

export default function CommentForm({ params }: { params: { id: string } }) {
  // const [message, setMessage] = useState("");
  // Action

  async function create(formData: FormData) {
    "use server";
    formData.set("postId", params.id);
    await addComment(formData);
  }
  return (
    <form action={create}>
      <Flex>
        <Input placeholder="Leave a comment..." name="message" type="text" />
        <Button ml="8px" colorScheme="blue" type="submit">
          Post
        </Button>
      </Flex>
    </form>
  );
}
