import React from "react";
import Image from "next/image";
import Titel from "../../public/Titel.png";

function Navbar() {
  return (
    <header className="fixed top-0 bg-transparent w-full h-20 bg-gray-400 flex flex-row items-center">
      <Image className="absolute w-20 p-3" src={Titel} alt="Titel image" />
      <ul className="w-full flex flex-row justify-center items-center">
        <li>Book</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Navbar;
