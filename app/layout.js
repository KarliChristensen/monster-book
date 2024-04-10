import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Head from "next/head";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lille Monster",
  description: "A lille hjemmeside om en lille bog, om et lille monster.",
  images: [
    {
      url: "/Thumbnail.png", // Reference to the local image
      width: 1200,
      height: 630,
    },
  ],
};

export default function RootLayout({ children }) {
  const imageUrl = "https://monster-taupe.vercel.app/og.png";

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="https://monster-taupe.vercel.app/og.png"></meta>
        <meta property="og:image:width" content={1200} />
        <meta property="og:image:height" content={630} />
        <meta
          property="og:url"
          content="https://monster-taupe.vercel.app/og.png"
        ></meta>
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://monster-taupe.vercel.app/og.png" />
        <meta
          property="og:description"
          content="Brittany Chiang is a software engineer who builds accessible, inclusive products and digital experiences for the web."
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
