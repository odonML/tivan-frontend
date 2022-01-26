import React from "react";

function CardDescription({
  text,
  txColor = "text-gray-1",
  fontSize = "text-lg",
}) {
  return (
    <p
      className={`montse-rg ${txColor} ${fontSize} md:text-base lg:text-lg xl:text-xl`}
    >
      {text}
    </p>
  );
}

export default CardDescription;
