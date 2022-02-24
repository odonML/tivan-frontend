import React from "react";

function ButtonDelete({
  type = true,
  id = null,
  bgColor = "bg-pink-0",
  txColor = "text-white",
  icon = null,
  click = null,
}) {
  const clickDelete = (e) => {
    if (click != null) click(e);
  };

  return (
    <button
      id={id}
      type={type ? "button" : "submit"}
      className={`w-fit h-fit p-1 flex items-center justify-center ${bgColor} ${txColor} ease-out duration-300 hover:text-purple-0`}
      onClick={(e) => clickDelete(e)}
    >
      {icon}
    </button>
  );
}

export default ButtonDelete;
