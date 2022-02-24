import React from "react";

function ButtonIcon({
  type = true,
  id = null,
  bgColor = "bg-purple-0",
  txColor = "text-white",
  icon = null,
  click = null,
}) {
  const handleClick = (e) => {
    if (click != null) click(e);
  };

  return (
    <button
      id={id}
      type={type ? "button" : "submit"}
      className={`w-fit h-fit p-1 flex items-center justify-center ${bgColor} ${txColor} text-pink-0 ease-out duration-300 rounded-full hover:bg-purple-0 hover:text-pink-0`}
      onClick={(e) => handleClick(e)}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
