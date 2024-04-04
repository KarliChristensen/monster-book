import React from "react";
import Monster from "./Components/Monster";

function Page() {
  return (
    <div className="w-full h-dvh bg-[#e74b37] flex flex-col justify-between items-center">
      <div className="w-full h-full"></div>
      <Monster />
    </div>
  );
}

export default Page;
