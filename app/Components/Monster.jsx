"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MonsterBackground from "../../public/Monster.png";
import MonsterFurLeft from "../../public/PelsLeftL.png";
import MonsterFurRight from "../../public/PelsRightL.png";
import MonsterEyeLeft from "../../public/Pupil_2_2.png";
import MonsterEyeRight from "../../public/Pupil_2_2.png";

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
    <div className="w-full md:h-[200px] pb-5 mt-2 md:mt-5 bg-[#e74b37] flex flex-col items-center overflow-hidden">
      <div id="anchor" className="w-[120px] md:w-full relative max-w-[225px]">
        <Image
          className="absolute bottom-[2%] right-[100%] max-w-[500px] md:max-w-[1000px]"
          src={MonsterFurLeft}
          alt="Monster fur left"
        />
        <Image
          className="absolute bottom-[2%] left-[80%] max-w-[500px] md:max-w-[1000px]"
          src={MonsterFurRight}
          alt="Monster fur right"
        />
        <Image src={MonsterBackground} alt="Monster background" />
        <div>
          <Image
            className="eye absolute w-[49%] bottom-[20%] right-[53%]"
            src={MonsterEyeLeft}
            alt="Monster eye left"
          />
          <Image
            className="eye absolute w-[49%] bottom-[20%] left-[55%]"
            src={MonsterEyeRight}
            alt="Monster eye right"
          />
        </div>
      </div>
    </div>
  );
}

export default Monster;
