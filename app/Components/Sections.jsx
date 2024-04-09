import React from "react";
import Contact from "./Sections/Contact";
import Book from "./Sections/Book";


function Sections() {



  return (
    <div className="w-full h-full snap-y snap-mandatory overflow-y-scroll mandatory scroll-smooth scrollbar-hide mt-20">
      <Book />
      <Contact />
    </div>
  );
}

export default Sections;
