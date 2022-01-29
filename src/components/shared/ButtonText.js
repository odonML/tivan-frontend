import React from "react";

function ButtonText({
  id = null,
  children = null,
  type = true,
  flex = "flex",
  flexDirection = "flex-row",
  alingItem = "items-center",
  justifyContent = "justify-center",
  radio = "rounded-full",
  fontSize = "text-base",
  color = "bg-purple-0",
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
      ${txColor} ${fontSize} ${transitionTaiming} ${transitionDuration} ${color}`}
      onClick={(e) => handleClick(e)}
    >
      {children}
      {icon}
    </button>
  );
}

export default ButtonText;
