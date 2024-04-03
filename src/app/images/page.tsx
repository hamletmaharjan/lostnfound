import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Images() {
  return (
    <Box p="12px">
      <Image
        src="/images/hero-desktop.png"
        width={1000}
        height={760}
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </Box>
  );
}
