import React from "react";

function Logo({ children, txColor = "text-pink-0" }) {
  return (
    <p className={`mr-3 fredoka ${txColor} text-lg md:text-xl lg:text-2xl`}>
      {children}
    </p>
  );
}

export default Logo;
