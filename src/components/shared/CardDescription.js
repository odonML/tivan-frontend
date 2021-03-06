import React from "react";

function CardDescription({ text, txColor = "text-gray-1" }) {
  return <p className={`montse-rg ${txColor} text-xs sm:text-lg`}>{text}</p>;
}

export default CardDescription;
