import { Box, Grid, GridItem } from "@chakra-ui/react";
// import fetch from "node-fetch";

import Navbar from "../../components/navbar";
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
  // console.log(data);
  return (
    <Box maxWidth={"1080px"} marginX="auto">
      <Box mt="40px">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}