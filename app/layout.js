import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lille Monster",
  description: "A lille hjemmeside om en lille bog, om et lille monster.",
  images: [
    {
      url: "https://i.ibb.co/09kK8DP/Thumbnail.png",
      width: 1200,
      height: 630,
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Google / Search Engine Tags */}
        <meta itemprop="name" content="Lille Monster" />
        <meta
          itemprop="description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />
        <meta
          itemprop="image"
          content="https://i.ibb.co/09kK8DP/Thumbnail.png"
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://monster-taupe.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lille Monster" />
        <meta
          property="og:description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/09kK8DP/Thumbnail.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lille Monster" />
        <meta
          name="twitter:description"
          content="A lille hjemmeside om et lille bog, om et lille monster."
        />
        <meta
          name="twitter:image"
          content="https://i.ibb.co/09kK8DP/Thumbnail.png"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
