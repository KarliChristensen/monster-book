import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Monster",
  description: "A project about the children's book Monster",
};

export async function GET() {
  const imageData = await fetch(
    new URL("../public/images/Thumbnail.png", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width="256" height="256" src={imageData} alt="Monster" />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

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
