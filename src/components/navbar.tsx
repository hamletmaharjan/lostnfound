"use client";
import { Flex, Box, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Flex justifyContent={"space-between"} py="20px">
      <Flex>
        <Text p="12px">Home</Text>
        <Text p="12px">About</Text>
      </Flex>
      <Flex>
        <Link as={NextLink} href={"/create"} p="12px">
          Create
        </Link>
        <Text p="12px">Signin/Signout</Text>
      </Flex>
    </Flex>
  );
}
