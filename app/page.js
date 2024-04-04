"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Monster from "../public/Monster.png";
import MonsterEyeLeft from "../public/Pupil_2_2.png";
import MonsterEyeRight from "../public/Pupil_2_2.png";

function Page() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.getElementById("anchor");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      console.log(angleDeg);

      const eyes = document.querySelectorAll(`.eye`);
      eyes.forEach((eye) => {
        eye.style.transform = `rotate(${245 + angleDeg}deg)`;
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
    <div className="w-full h-dvh bg-[#e74b37] flex flex-col justify-between items-center">
      <div>Carousel</div>
      <div className="relative w-1/2 mb-5 max-w-[25%]">
        <Image id="anchor" src={Monster} alt="Monster background" />
        <div>
          <Image
            className="eye absolute w-[45%] bottom-[23%] right-[52%]"
            src={MonsterEyeLeft}
            alt="Monster eye left"
          />
          <Image
            className="eye absolute w-[45%] bottom-[23%] left-[57%]"
            src={MonsterEyeRight}
            alt="Monster eye right"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
