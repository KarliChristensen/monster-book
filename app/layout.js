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
      url: "https://ibb.co/HP0C1Fm",
      width: 1200,
      height: 630,
    },
  ],
};

export default function RootLayout({ children }) {
  const thumbnail = metadata.images[0];

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={thumbnail.url} />
        <meta property="og:image:width" content={thumbnail.width} />
        <meta property="og:image:height" content={thumbnail.height} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={thumbnail.url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
