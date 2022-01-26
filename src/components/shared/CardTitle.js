import React from "react";

function CardTitle({ text }) {
  return (
    <p className="font-bold montse-md capitalize text-sm md:text-base lg:text-lg xl:text-xl">
      {text}
    </p>
  );
}

export default CardTitle;
