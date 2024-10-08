import "./globals.css";
import * as React from "react";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/smooth-scroll/SmoothScroll";

//Components
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { metaData } from "@/data/meta-data";
import NewFooter from "@/components/footer/NewFooter";
import NewHeader from "@/components/header/NewHeader";

//Setup & Meta
const myFont = localFont({
  src: [
    {
      path: "./FFFAcidGroteskVariable.ttf",
      style: "normal",
    },
    {
      path: "./FFFAcidGroteskVariable.ttf",
      style: "italic",
    },
  ],
});

export const metadata = {
  title: metaData.title,
  description: metaData.description,

  //Basic
  generator: metaData.title,
  applicationName: metaData.title,
  referrer: "origin-when-cross-origin",
  keywords: metaData.keywords,
  authors: [
    { name: "Pedro Henrique Alencar" },
    { name: "PEAGACE", url: "https://peagace.com" },
  ],
  creator: "PEAGACE",
  publisher: "PEAGACE",
  themeColor: metaData.themeColor,

  //Open Graph
  openGraph: {
    title: metaData.title,
    description: metaData.description,
    url: metaData.url,
    siteName: metaData.subtitle,
    images: [
      {
        url: metaData.metaImage,
        width: 1200,
        height: 630,
      },
      {
        url: metaData.metaImage,
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="background:bg-accent selection:bg-black selection:text-white"
    >
      <body className={myFont.className}>
        <NewHeader />
        <SmoothScroll>{children}</SmoothScroll>
        <NewFooter />
        <Analytics />
      </body>
    </html>
  );
}
