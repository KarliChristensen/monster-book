"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MonsterBackground from "../../public/images/Monster.png";
import MonsterFurLeft from "../../public/images/PelsLeftL.png";
import MonsterFurRight from "../../public/images/PelsRightL.png";
import MonsterEyeLeft from "../../public/images/Pupil_2_2.png";
import MonsterEyeRight from "../../public/images/Pupil_2_2.png";

function Monster() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("anchor");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      const eyes = document.querySelectorAll(`.eye`);
      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${265 + angleDeg}deg)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  return (
    <div className="w-full h-[50px] sm:h-[70px] max-h-[80px] py-2 px-5 bg-[#e74b37] flex justify-center items-center overflow-hidden">
      <Image
        className="h-full min-h-[40px] w-max"
        src={MonsterFurLeft}
        alt="Monster fur left"
      />
      <Image
        className="h-full min-h-[40px] w-max"
        src={MonsterFurRight}
        alt="Monster fur left"
      />
      <Image
        className="h-full min-h-[40px] w-max"
        src={MonsterFurLeft}
        alt="Monster fur left"
      />
      <div id="anchor" className="h-full w-auto shrink-0 relative mx-2">
        <Image
          className="h-full w-full"
          src={MonsterBackground} alt="Monster background" />
        <div className="absolute inset-0">
          <Image
            className="eye absolute w-[49%] right-[53%] top-[-5%]"
            src={MonsterEyeLeft}
            alt="Monster eye left"
          />
          <Image
            className="eye absolute w-[49%] left-[55%] top-[-5%]"
            src={MonsterEyeRight}
            alt="Monster eye right"
          />
        </div>
      </div>
      <Image
        className="h-full min-h-[40px] w-max"
        src={MonsterFurRight}
        alt="Monster fur right"
      />
      <Image
        className="h-full min-h-[40px] w-max"
        src={MonsterFurLeft}
        alt="Monster fur right"
      />
      <Image
        className="h-full min-h-[40px] w-max"
        src={MonsterFurRight}
        alt="Monster fur right"
      />
    </div>
  );
}

export default Monster;
