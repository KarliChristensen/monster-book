import { Inter } from "next/font/google";
import { ImageResponse } from "next/og";
import Navbar from "./Components/Navbar";
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
