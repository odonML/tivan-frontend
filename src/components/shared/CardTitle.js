import React from "react";

function CardTitle({ text }) {
  return (
    <p className="font-bold capitalize text-xs md:text-sm lg:text-base xl:text-lg">
      {text}
    </p>
  );
}

export default CardTitle;
