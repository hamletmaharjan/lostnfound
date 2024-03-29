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
  const [image, setImage] = useState();

  const router = useRouter();
  // console.log(data);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    try {
      const payload = { title, body, image };
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

  const uploadFile = async (file) => {
    const response = await fetch("/api/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename: file.name, contentType: file.type }),
    });

    if (response.ok) {
      const { url, fields, filename } = await response.json();
      console.log("url", url, fields);

      const formData = new FormData();
      Object.entries(fields).forEach(([key, value]) => {
        formData.append(key, value as string);
      });
      formData.append("file", file);

      const uploadResponse = await fetch(url, {
        method: "POST",
        body: formData,
      });
      console.log("res", uploadResponse);

      if (uploadResponse.ok) {
        setImage(url + filename);
        console.log("success", url + filename);
      } else {
        console.error("S3 Upload Error:", uploadResponse);
      }
    } else {
      console.log("Failed to get pre-signed URL.");
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

        <Box mt="12px">
          <input
            id="file"
            type="file"
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                uploadFile(files[0]);
              }
            }}
            accept="image/png, image/jpeg"
          />
        </Box>
        <Button mt={"12px"} colorScheme="green" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
