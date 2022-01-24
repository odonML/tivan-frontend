import React from "react";

function Image({ img, text }) {
  return <img className="w-full" src={img} alt={text} />;
}

export default Image;
