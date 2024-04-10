import React from "react";
import Image from "next/image";
import WebsiteIcon from "../../../public/icons/admin-site-alt3.256x256.png";
import EmailIcon from "../../../public/icons/envelope.256x193.png";
import ProfileKarli from "../../../public/images/1549751914876.jpg";
import ProfileMaria from "../../../public/images/1626197218200.jpg";
import NameKarli from "../../../public/images/NameK.png";
import NameMaria from "../../../public/images/NameM.png";

function Contact() {
  return (
    <section id="contact" className="w-full sm:h-full flex overflow-x-hidden snap-start">
      {/* /* Maria */}

      <div className="mt-10 md:mt-0 md:mr-0 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col">
          <div className="flex justify-between mr-5 md:mr-0 min-w-[335px] max-w-[500px] bg-orange-900/50 rounded-r-full md:bg-transparent md:flex-col-reverse md:self-center">
            <div className="flex flex-col ml-5 md:ml-0 self-center text-center">
              <Image
                src={NameMaria}
                alt="Named image of author - Maria"
                className="self-center mt-5 w-[35%] min-w-[135px]"
              ></Image>
              <h3>Illustrator</h3>
              <div className="flex justify-center">
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
          <p className="mt-5 mx-10 text-sm md:text-base self-center md:max-w-[600px]">
            Maria kan godt lide at tegne. Hun tegner ufoer, spejlæg og andre
            fjollede ting - og tygger på lampeskærme når hun tror man ikke
            kigger. Maria mødte en dag Karli. Ham kan hun også godt lide.
          </p>
        </div>

        {/* /* Karli */}

        <div className="flex flex-col w-full">
          <div className="flex md:flex-col justify-end mt-5 md:mt-10 w-full">
            <div className="flex flex-row-reverse grow justify-between ml-5 md:ml-0 min-w-[335px] max-w-[500px] bg-orange-900/50 rounded-l-full md:bg-transparent md:flex-col-reverse md:self-center">
              <div className="flex flex-col mr-5 md:mr-0 self-center text-center">
                <Image
                  src={NameKarli}
                  alt="Named image of author - Karli"
                  className="self-center mt-5 w-[50%] min-w-[150px]"
                ></Image>
                <h3>Web Developer</h3>
                <div className="flex justify-center">
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
                className="rounded-full max-w-[150px] md:float-none md:self-center"
                src={ProfileKarli}
                alt="Profile picture of Karli Christensen."
              />
            </div>
          </div>
          <p className="my-5 mx-10 text-sm md:text-base self-center md:max-w-[600px]">
            Karli bygger ting og skriver. Engang byggede han et hul i jorden og
            fik skældud. Men han har aldrig spist lampeskærme. Da Karli mødte
            Maria flyttede der pludselig et monster ind hos dem. Det var meget
            forvirrende. Det har de lavet en bog om.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
