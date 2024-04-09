import React from "react";
import Image from "next/image";
import Link from "next/link";
import Bogen from "../../public/images/Bogen.png";
import Forfatterne from "../../public/images/Forfatterne.png";
import Line from "../../public/images/Streg1.png";

function Navbar() {
  return (
    <header className="fixed top-0 bg-transparent w-full">
      <div className="relative flex flex-row items-center h-20">
        <ul className="w-full flex flex-row justify-center items-center space-x-1 md:space-x-4">
          <li className="hover:rotate-3 transform transition-all ease-in-out duration-300">
            <Link href="#book">
              <Image
                className="w-20 md:w-24"
                src={Bogen}
                alt="Text image - Bogen"
              />
            </Link>
          </li>
          <li className="hover:rotate-3 transform transition-all ease-in-out duration-300">
            <Link href="#contact">
              <Image
                className="w-36 md:w-48"
                src={Forfatterne}
                alt="Text image - Forfatterne"
              />
            </Link>
          </li>
        </ul>
        <Image
          className="absolute transform -translate-x-[2%] translate-y-[50%] max-w-[3500px] h-20 -z-10"
          src={Line}
          alt="Divider line for the navbar"
        />
      </div>
    </header>
  );
}

export default Navbar;
