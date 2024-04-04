import React from "react";
import Image from "next/image";
import Authors from "../../../public/Forfattere.png";

function Contact() {
  return (
    <div id="contact" className="w-full h-full">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-[90%] max-w-[700px]"
          src={Authors}
          alt="Title with authors Karli and Maria"
        />
      </div>
      <div className="ml-5">
        <h1 className="text-center font-bold text-2xl mt-20">
          You can find us gnawing on the lamp shades here:
        </h1>
        <div className="mt-10">
          <h2>Maria Tran Larsen:</h2>
          <p>Website:</p>
          <p>Email:</p>
        </div>
        <div className="mt-10">
          <h2>Karli Christensen:</h2>
          <p>Website:</p>
          <p>Email:</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
