import React from "react";

function ButtonIcon({
  type = true,
  favorite = false,
  sales = false,
  click = null,
  icon = null,
}) {
  return (
    <button
      type={type ? "button" : "submit"}
      className={`w-full h-fit mx-1 flex items-center justify-center ease-out duration-300 rounded-full
      ${sales ? "bg-yellow-0 text-purple-0" : "bg-purple-0 hover:bg-purple-100"}
      ${favorite && !sales ? "text-yellow-0" : "text-white"} ${
        icon !== null ? "p-1" : "px-3"
      }`}
      onClick={click}
    >
      {icon}
    </button>
  );
}

export default ButtonIcon;
