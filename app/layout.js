import { Inter } from "next/font/google";
import { ImageResponse } from "next/og";
import Navbar from "./Components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const runtime = "edge";

export const alt = "Lille Monster";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function Image() {
  const interSemiBold = fetch(
    new URL("../public/Thumbnail.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Lille Monster
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}

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
