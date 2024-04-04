import React from "react";
import Image from "next/image";
import Authors from "../../../public/Forfattere.png";
import WebsiteIcon from "../../../public/icons/admin-site-alt3.256x256.png";
import EmailIcon from "../../../public/icons/envelope.256x193.png";

function Contact() {
  return (
    <section id="contact" className="w-full h-full snap-start">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-[90%] max-w-[700px]"
          src={Authors}
          alt="Title with authors Karli and Maria"
        />
      </div>
      <div className="ml-5 flex flex-col">
        <div className="flex flex-col mt-10">
          <h2 className="font-semibold">Maria Tran Larsen:</h2>
          <p className="mr-5 mt-3 bg-orange-900/50 py-2 px-5">
            Maria er en verdensklasse grafiks designer, der godt kan lide monstre, ufoer
            og andre fjollede ting, og så tygger hun på lampeskærme når man ikke
            kigger. Nå ja, og så tegner hun monstre.
          </p>
        </div>
        <div className="flex">
          <a className="mr-2" href="">
            <Image
              className="mt-5 h-8 w-8"
              src={WebsiteIcon}
              alt="Website image link"
            />
          </a>
          <a href="">
            <Image
              className="mt-5 h-8 w-10"
              src={EmailIcon}
              alt="Website image link"
            />
          </a>
        </div>
        <div className="flex flex-col mt-10">
          <h2 className="font-semibold">Karli Christensen:</h2>
          <p className="mr-5 mt-3 bg-orange-900/50 py-2 px-5">
            Karli bygger ting, hjemmesider og hovedpiner, og skriver børnebøger,
            og engang så gravde han også et hul i haven og fik skældud. Du kan
            se de ting han bygger her:
          </p>
        </div>
        <div className="flex">
          <a className="mr-2" href="">
            <Image
              className="mt-5 h-8 w-8"
              src={WebsiteIcon}
              alt="Website image link"
            />
          </a>
          <a href="">
            <Image
              className="mt-5 h-8 w-10"
              src={EmailIcon}
              alt="Website image link"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
