import React from "react";
import Contact from "./Sections/Contact";
import Book from "./Sections/Book";


function Sections() {



  return (
    <div className="w-full h-full snay-y overflow-y-auto snap-mandatory scroll-smooth mt-20">
      <Book />
      <Contact />
    </div>
  );
}

export default Sections;
