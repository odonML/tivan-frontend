import React from "react";
import { BiHomeAlt } from "react-icons/bi";

function ButtonIcon({
  type = true,
  id = "",
  bgColor = "bg-purple-0",
  txColor = "text-white",
  display = "flex",
  alingItem = "items-center",
  justifyContent = "justify-center",
  icon = <BiHomeAlt size={20} />,
  click = null,
}) {
  const handleClick = (e) => {
    if (click != null) click(e);
  };

  return (
    <button
      id={id}
      type={type ? "button" : "submit"}
      className={`w-fit h-fit p-1.5 ${display} ${alingItem} ${justifyContent} ease-out duration-300 rounded-full
      ${bgColor} ${txColor} hover:bg-purple-0 hover:text-pink-0`}
      onClick={(e) => handleClick(e)}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
