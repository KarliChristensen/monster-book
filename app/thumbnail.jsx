import React from "react";
import Image from "next/image";
import thumbnailImage from "../public/images/og.png";

function thumbnail() {
  return <Image src={thumbnailImage} alt={"Thumbnail image"} />;
}

export default thumbnail;
