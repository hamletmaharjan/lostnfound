import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | LostnFound",
    default: "LostnFound",
  },
  description: "Lost and Found.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box maxWidth={"1080px"} marginX={"auto"}>
            <Navbar />
            <Box suppressHydrationWarning>{children}</Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
