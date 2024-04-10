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
        <title>Lille Monster</title>
        <meta
          name="description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />

        {/*  Facebook Meta Tags  */}
        <meta property="og:url" content="https://monster-taupe.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lille Monster" />
        <meta
          property="og:description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/3e0779af-49fa-4ac4-b131-f1cc50a83dfb.png?token=U4hsp3zw_-HKvLfmwZPVt0njD_JVR9r8eVX6laodc-s&height=675&width=1200&expires=33248775526"
        />

        {/*  Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="monster-taupe.vercel.app" />
        <meta
          property="twitter:url"
          content="https://monster-taupe.vercel.app/"
        />
        <meta name="twitter:title" content="Lille Monster" />
        <meta
          name="twitter:description"
          content="A lille hjemmeside om en lille bog, om et lille monster."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/3e0779af-49fa-4ac4-b131-f1cc50a83dfb.png?token=U4hsp3zw_-HKvLfmwZPVt0njD_JVR9r8eVX6laodc-s&height=675&width=1200&expires=33248775526"
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
