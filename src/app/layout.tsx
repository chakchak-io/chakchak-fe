import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import localFont from "next/font/local";
import { Theme } from "@radix-ui/themes";

import "./globals.css";
import "@radix-ui/themes/styles.css";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sourceSansPro",
});

const pretendard = localFont({
  src: "../font/PretendardVariable.woff2",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "ChakChak",
  description: "ChakChak io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.className} ${sourceSansPro.className} bg-white`}
      >
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
