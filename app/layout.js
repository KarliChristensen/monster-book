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
      url: "https://monster-taupe.vercel.app/og.png",
      width: 741,
      height: 416,
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
        <meta name="image" content={imageUrl} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={imageUrl}></meta>
        <meta property="og:image:width" content={741} />
        <meta property="og:image:height" content={416} />
        <meta property="og:url" content={imageUrl}></meta>
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
