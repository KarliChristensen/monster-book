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
        <meta property="og:image" content={metadata.images[0].url} />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
