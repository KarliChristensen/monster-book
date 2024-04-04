"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MonsterBackground from "../../public/Monster.png";
import MonsterFur from "../../public/pels.png";
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
    <div className="w-full h-dvh bg-[#e74b37] flex flex-col justify-between items-center">
      <div id="anchor" className="relative w-1/2 my-5 max-w-[25%]">
{/*         <Image className="absolute" src={MonsterFur} alt="Monster fur" /> */}
        <Image src={MonsterBackground} alt="Monster background" />
        <div>
          <Image
            className="eye absolute w-[49%] bottom-[20%] right-[53%] transition-all ease-in-out duration-200"
            src={MonsterEyeLeft}
            alt="Monster eye left"
          />
          <Image
            className="eye absolute w-[49%] bottom-[20%] left-[55%] transition-all ease-in-out duration-200"
            src={MonsterEyeRight}
            alt="Monster eye right"
          />
        </div>
      </div>
    </div>
  );
}

export default Monster;
