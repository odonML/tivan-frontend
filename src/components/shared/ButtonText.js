import React from "react";

function ButtonText({
  id = null,
  children = null,
  type = true,
  hover = true,
  primary = true,
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
      className={`w-full h-fit m-1 shadow hover:shadow-md md:text-md sm:text-sm hover:outline-1 hover:bg-transparent
      ${flex} ${flexDirection} ${alingItem} ${justifyContent} ${radio} 
      ${txColor} ${fontSize} ${transitionTaiming} ${transitionDuration} ${
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
      }`}
      onClick={(e) => handleClick(e)}
    >
      {children}
      {icon}
    </button>
  );
}

export default ButtonText;
