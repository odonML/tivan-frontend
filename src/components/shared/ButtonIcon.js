import React from "react";

function ButtonIcon({
  type = true,
  bgColor = "bg-purple-0",
  txColor = "text-white",
  click = null,
  icon = null,
}) {
  return (
    <button
      type={type ? "button" : "submit"}
      className={`w-fit h-fit m-1 flex items-center justify-center ease-out duration-300 rounded-full
      ${bgColor} ${txColor} hover:bg-purple-0 hover:text-pink-0
      ${icon !== null ? "p-1.5" : "px-3"}`}
      onClick={click}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
