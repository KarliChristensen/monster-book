import React from "react";
import Image from "next/image";
import Link from "next/link";
import Titel from "../../public/Titel.png";

function Navbar() {
  return (
    <header className="fixed top-0 bg-transparent w-full h-20 flex flex-row items-center">
      <Image className="absolute w-20 p-3" src={Titel} alt="Titel image" />
      <ul className="w-full flex flex-row justify-center items-center space-x-2">
        <Link
          className="hover:scale-105 transition-all ease-in-out"
          href="#book"
        >
          Bog
        </Link>
        <Link
          className="hover:scale-105 transition-all ease-in-out"
          href="#about"
        >
          Forfatterne
        </Link>
        <Link
          className="hover:scale-105 transition-all ease-in-out"
          href="#contact"
        >
          Kontakt
        </Link>
      </ul>
    </header>
  );
}

export default Navbar;
