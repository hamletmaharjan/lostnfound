"use client";

import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

import { usePathname } from "next/navigation";
import NextLink from "next/link";

const styles = {
  activeLink: {
    color: "green",
    p: "12px",
  },
  link: {
    p: "12px",
  },
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Flex justifyContent={"space-between"} py="20px">
      <Flex>
        <Link
          sx={pathname === "/" ? styles.activeLink : styles.link}
          as={NextLink}
          href="/"
        >
          Home
        </Link>
        <Link
          sx={pathname === "/images" ? styles.activeLink : styles.link}
          as={NextLink}
          href="/images"
        >
          Images
        </Link>
        <Link
          sx={pathname === "/about" ? styles.activeLink : styles.link}
          as={NextLink}
          href="/about"
        >
          About
        </Link>
      </Flex>
      <Flex>
        <Link
          as={NextLink}
          href={"/create"}
          sx={pathname === "/create" ? styles.activeLink : styles.link}
        >
          Create
        </Link>
        <Text p="12px">Signin/Signout</Text>
      </Flex>
    </Flex>
  );
}
