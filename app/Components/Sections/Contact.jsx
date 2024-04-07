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
      className="w-full h-full flexoverflow-y-auto overflow-x-hidden snap-start"
    >
      {/* Titel */}

      <div className="flex flex-col justify-center items-center">
        <Image
          className="w-[90%] max-w-[700px]"
          src={Authors}
          alt="Title with authors - Karli and Maria"
        />
      </div>

      {/* /* Maria */}

      <div className="mr-5 md:mr-0 flex flex-col w-full">
        <div className="flex flex-col mt-10">
          <div className="flex justify-between mr-5 md:mr-0 min-w-[335px] max-w-[500px] bg-orange-900/50 rounded-r-full md:bg-transparent md:flex-col-reverse md:self-center">
            <div className="ml-5 md:ml-0 self-center md:text-center">
              <h2 className="font-semibold md:mt-10">Maria Tran Larsen:</h2>
              <h3>Grafisk Designer</h3>
              <div className="flex md:justify-center">
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
              className="rounded-full max-w-[150px] float-right md:float-none self-center"
              src={ProfileMaria}
              alt="Profile picture of Maria Tran Larsen."
            />
          </div>
          <p className="m-5 self-center md:max-w-[600px]">
            Maria er en grafiks designer, der godt kan lide
            dinosaurer, ufoer og andre fjollede ting, og så tygger hun på
            lampeskærme når man ikke kigger. Nå ja, og så tegner hun monstre og. 
          </p>
        </div>

        {/* /* Karli */}

        <div className="mr-5 flex flex-col w-full">
          <div className="flex md:flex-col flex-row-reverse mt-10">
            <div className="flex flex-row-reverse justify-end ml-5 md:ml-0 min-w-[500px] max-w-[500px] bg-orange-900/50 rounded-l-full md:bg-transparent md:flex-col-reverse md:self-center">
              <div className="mr-5 md:mr-0 self-center md:text-center">
                <h2 className="font-semibold md:mt-10">Karli Christensen:</h2>
                <h3>Web Developer</h3>
                <div className="flex md:justify-center">
                  <a className="mr-2" href="https://nbi-portfolio.vercel.app/">
                    <Image
                      className="mt-5 h-6 w-6 hover:scale-110 transition-all ease-in-out"
                      src={WebsiteIcon}
                      alt="Website image link"
                    />
                  </a>
                  <a
                    className="flex items-center hover:scale-110 transition-all ease-in-out"
                    href="mailto:karlichristensen@post.com"
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
                className="rounded-full max-w-[150px] float-left md:float-none self-center"
                src={ProfileKarli}
                alt="Profile picture of Karli Christensen."
              />
            </div>
          </div>
          <p className="m-5 self-center md:max-w-[600px]">
            Karli bygger ting og oversætter tekster. Engang byggede han et hul i haven, fik han skældud og blev sat til at skrive en bog om monstre.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
