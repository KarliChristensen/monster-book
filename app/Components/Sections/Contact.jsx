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
            Maria er en verdensklasse grafiks designer, der godt kan lide
            monstre, ufoer og andre fjollede ting, og så tygger hun på
            lampeskærme når man ikke kigger. Nå ja, og så tegner hun monstre.
          </p>
        </div>
        <div className="flex">
          <a className="mr-2" href="https://mariatran.cargo.site/">
            <Image
              className="mt-5 h-8 w-8 hover:scale-110 transition-all ease-in-out"
              src={WebsiteIcon}
              alt="Website image link"
            />
          </a>
          <a
            className="flex items-center hover:scale-110 transition-all ease-in-out"
            href="mailto:dingotran@gmail.com"
          >
            <Image
              className="mt-5 h-7 w-9"
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
          <a className="mr-2" href="https://nbi-portfolio.vercel.app/">
            <Image
              className="mt-5 h-8 w-8 hover:scale-110 transition-all ease-in-out"
              src={WebsiteIcon}
              alt="Website image link"
            />
          </a>
          <a
            className="flex items-center"
            href="mailto:karlichristensen@post.com"
          >
            <Image
              className="mt-5 h-7 w-9 hover:scale-110 transition-all ease-in-out"
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
