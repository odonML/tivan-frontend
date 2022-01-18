import React from "react";

function Button({
  children = null,
  type = true,
  reverse = false,
  circle = false,
  primary = true,
  textSize = "sm",
  wFull = true,
  hover = true,
  click = null,
  icon = null,
}) {
  return (
    <button
      type={type ? "button" : "submit"}
      className={` h-fit mx-1 flex items-center justify-center text-white ease-out duration-300 shadow hover:shadow-md ${
        wFull ? "w-full" : "w-auto"
      } ${icon !== null && children === null ? "p-1" : "px-3"}
      ${reverse ? "flex-row-reverse" : "inline-flex"} ${
        circle ? "rounded-full" : "rounded-lg"
      } 
      ${hover && "hover:outline-1 hover:bg-transparent"}
       ${
         primary
           ? `bg-purple-0 ${
               hover
                 ? "hover:text-purple-0 hover:outline hover:outline-purple-0 hover:outline-offset-0 hover:shadow-purple-0/40"
                 : ""
             }`
           : `bg-pink-0 ${
               hover
                 ? "hover:text-pink-0 hover:outline hover:outline-pink-0 hover:outline-offset-0 hover:shadow-pink-0/40"
                 : ""
             }`
       } ${
        textSize === "lg"
          ? "text-lg"
          : textSize === "md"
          ? "text-base"
          : "text-sm"
      }`}
      onClick={click}
    >
      {children}
      {icon}
    </button>
  );
}

export default Button;
