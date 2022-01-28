import React from "react";

function Button({
  id = null,
  children = null,
  type = true,
  primary = true,
  hover = true,
  flex = "flex",
  flexDirection = "flex-row",
  alingItem = "items-center",
  justifyContent = "justify-center",
  radio = "rounded-full",
  fontSize = "text-base",
  txColor = "text-white",
  transitionTaiming = "ease-out",
  transitionDuration = "duration-300",
  click = null,
  icon = null,
}) {
  const handleClick = (e) => {
    if (click != null) click(e);
  };
  return (
    <button
      id={id}
      type={type ? "button" : "submit"}
      className={`w-full h-fit m-1 ${flex} ${flexDirection} ${alingItem} ${justifyContent} ${radio} ${txColor} ${fontSize} ${transitionTaiming} ${transitionDuration} shadow hover:shadow-md
      ${hover && "hover:outline-1 hover:bg-"}
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
       } md:text-md sm:text-sm`}
      onClick={(e) => handleClick(e)}
    >
      {children}
      {icon}
    </button>
  );
}

export default Button;
