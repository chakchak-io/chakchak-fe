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
  title: "착착",
  description: "팝업스토어를 위한 예약 플랫폼",
  openGraph: {
    title: "착착",
    type: "website",
    url: "https://www.chakchak.io/",
    description: "팝업스토어를 위한 예약 플랫폼",
    images: [
      {
        url: "https://www.chakchak.io/logo.svg",
        width: 1200,
        height: 630,
        alt: "착착",
      },
    ],
  },
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
