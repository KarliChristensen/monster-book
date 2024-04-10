import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lille Monster",
  description: "A lille hjemmeside om en lille bog, om et lille monster.",
};

export default function RootLayout({ children }) {
  const imageUrl = "https://monster-taupe.vercel.app/og.png";

  return (
    <html lang="en">
      <Head>
        {/* Google / Search Engine Tags */}

        <meta itemprop="name" content="Lille Monster" />
        <meta
          itemprop="description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />
        <meta itemprop="image" content={imageUrl} />

        {/* Facebook Meta Tags */}

        <meta property="og:url" content="https://monster-taupe.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lille Monster" />
        <meta
          property="og:description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter Meta Tags */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lille Monster" />
        <meta
          name="twitter:description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />
        <meta name="twitter:image" content={imageUrl} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
