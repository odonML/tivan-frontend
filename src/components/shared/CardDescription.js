import React from "react";

function CardDescription({ text, txColor = "text-gray-1" }) {
  return (
    <p
      className={`montse-rg ${txColor} text-sm md:text-lg lg:text-xl xl:text-2xl`}
    >
      {text}
    </p>
  );
}

export default CardDescription;
