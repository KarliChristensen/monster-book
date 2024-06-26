"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../../EmblaCarouselArrowButtons";
import Image1 from "../../../public/carousel/434162212_3704873876393008_5506175358342224231_n.jpg";
import Image2 from "../../../public/carousel/434181580_958401889297794_497161614157912026_n.jpg";
import Image3 from "../../../public/carousel/434206476_1398905948176745_6100765591080549796_n.jpg";
import Image4 from "../../../public/carousel/435899558_331976869884263_3300697518310859708_n.jpg";
import Image5 from "../../../public/carousel/436838659_390579813897924_7395228907837356262_n.jpg";
import TitelLine from "../../../public/images/TitelLine.png";

const Book = () => {
  const options = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section
      id="book"
      className="embla h-full w-full flex flex-col justify-center snap-start"
    >
      <Image
        className="w-2/3 self-center my-10 hidden sm:block"
        src={TitelLine}
        alt="Titel"
      />
      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="embla__container flex">
          <Image src={Image1} alt="Image 1 of 5 from the book" />
          <Image src={Image2} alt="Image 2 of 5 from the book" />
          <Image src={Image3} alt="Image 3 of 5 from the book" />
          <Image src={Image4} alt="Image 4 of 5 from the book" />
          <Image src={Image5} alt="Image 5 of 5 from the book" />
        </div>
      </div>

      <div className="embla__controls">
        <div className="flex justify-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <div className="p-3 text-xs md:text-base bg-orange-950/10 rounded-lg">
        <p>
          Alt ånder fred og ro i den lille familie; en mand, en dame og en kat.
          Indtil pludselig en dag døren går op med et brag og et lille monster
          kommer ind i deres liv! Men hvad stiller man op med et monster? Hvad
          spiser det? Hvorfor råber det? Hvor vil det helst sove? <br /> En
          charmerende billedbog for små monstre og deres store, nogle gange lidt
          kedelige voksne, om hvor kaotisk familieforøgelse kan være ... og når
          alt kommer til alt: dejlig og kram-fremkaldende!
        </p>
      </div>
    </section>
  );
};

export default Book;
