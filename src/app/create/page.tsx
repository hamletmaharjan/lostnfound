"use client";

import {
  Box,
  FormControl,
  Grid,
  GridItem,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

export default function Page() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const router = useRouter();
  // console.log(data);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      const payload = { title, body };
      console.log("payload", payload);
      await fetch(`/api/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p="12px" width={"720px"}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <FormLabel mt={"12px"}>Body</FormLabel>
        <Textarea onChange={(e) => setBody(e.target.value)} value={body} />

        <Button mt={"12px"} colorScheme="green" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
