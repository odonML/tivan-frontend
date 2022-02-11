import React from "react";

function CardTitle({ text = "", txColor = "text-gray-0" }) {
  return (
    <p
      className={`font-bold montse-md capitalize ${txColor} text-lg  sm:text-lg`}
    >
      {text}
    </p>
  );
}

export default CardTitle;
