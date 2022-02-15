import React from "react";

function Image({ img, text, click = null }) {
  return (
    <div onClick={click}>
      <img className="w-full h-full" src={img} alt={text} />
    </div>
  );
}

export default Image;
