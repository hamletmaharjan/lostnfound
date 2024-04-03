import { Box, Grid, GridItem } from "@chakra-ui/react";

import Post from "../../components/post";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <Box marginX="auto" mt="40px">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data.map((post) => (
          <GridItem key={post.id}>
            <Post post={post} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
