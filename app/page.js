import React from "react";
import Monster from "./Components/Monster";
import Sections from "./Components/Sections";

function Page() {
  return (
    <div className="w-full h-dvh bg-[#e74b37] flex flex-col justify-between items-center">
      <Sections />
      <Monster />
    </div>
  );
}

export default Page;
