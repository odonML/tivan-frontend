import React from "react";

function Image({ img, text, click = null }) {
  return (
    <div className="" onClick={click}>
      <img className="rounded-lg" src={img} alt={text} />
    </div>
  );
}

export default Image;
