import React from "react";
import Image from "next/image";
import Authors from "../../../public/Forfattere.png";
import WebsiteIcon from "../../../public/icons/admin-site-alt3.256x256.png";
import EmailIcon from "../../../public/icons/envelope.256x193.png";
import ProfileKarli from "../../../public/images/1549751914876.jpg";
import ProfileMaria from "../../../public/images/1626197218200.jpg";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full h-full overflow-y-auto overflow-x-hidden snap-start"
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-[90%] max-w-[700px]"
          src={Authors}
          alt="Title with authors - Karli and Maria"
        />
      </div>
      <div className="mr-5 flex flex-col w-full lg:w-2/3">
        <div className="flex flex-col mt-10">
          <div className="flex justify-between mr-5 bg-orange-900/50 rounded-r-full ">
            <div className="ml-2 self-center">
              <h2 className="font-semibold">Maria Tran Larsen:</h2>
              <h3>Grafisk Designer</h3>
              <div className="flex">
                <a className="mr-2" href="https://mariatran.cargo.site/">
                  <Image
                    className="mt-5 h-6 w-6 hover:scale-110 transition-all ease-in-out"
                    src={WebsiteIcon}
                    alt="Website image link"
                  />
                </a>
                <a
                  className="flex items-center hover:scale-110 transition-all ease-in-out"
                  href="mailto:dingotran@gmail.com"
                >
                  <Image
                    className="mt-5 h-6 w-8"
                    src={EmailIcon}
                    alt="Website image link"
                  />
                </a>
              </div>
            </div>
            <Image
              className="rounded-full max-w-[150px] float-right"
              src={ProfileMaria}
              alt="Profile picture of Maria Tran Larsen."
            />
          </div>
          <p className="m-5 self-center">
            Maria er en verdensklasse grafiks designer, der godt kan lide
            monstre, ufoer og andre fjollede ting, og så tygger hun på
            lampeskærme når man ikke kigger. Nå ja, og så tegner hun monstre.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row-reverse justify-between ml-5 bg-orange-900/50 rounded-l-full ">
            <div className="mr-2 self-center">
              <h2 className="font-semibold">Karli Christensen:</h2>
              <h3>Web Developer</h3>
              <div className="flex">
                <a className="mr-2" href="https://nbi-portfolio.vercel.app/">
                  <Image
                    className="mt-5 h-6 w-6 hover:scale-110 transition-all ease-in-out"
                    src={WebsiteIcon}
                    alt="Website image link"
                  />
                </a>
                <a
                  className="flex items-center"
                  href="mailto:karlichristensen@post.com"
                >
                  <Image
                    className="mt-5 h-6 w-8 hover:scale-110 transition-all ease-in-out"
                    src={EmailIcon}
                    alt="Website image link"
                  />
                </a>
              </div>
            </div>
            <Image
              className="rounded-full max-w-[150px] float-left"
              src={ProfileKarli}
              alt="Profile picture of Karli Christensen."
            />
          </div>
          <p className="m-5 self-center">
            Karli bygger ting, hjemmesider og hovedpiner, og skriver børnebøger,
            og engang så gravde han også et hul i haven og fik skældud. Du kan
            se de ting han bygger her:
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
