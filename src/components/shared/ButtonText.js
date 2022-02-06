import React from "react";

function ButtonText({
  id = null,
  children = null,
  type = true,
  bgColor = "bg-purple-0",
  txColor = "text-white",
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
      className={`w-full min-w-max h-fit px-2 m-1 shadow hover:shadow-md md:text-md sm:text-sm hover:outline-1
      flex items-center justify-center rounded-full ${bgColor} ${txColor} text-sm ease-out duration-300 md:text-sm lg:text-lg`}
      onClick={(e) => handleClick(e)}
    >
      {children}
      {icon}
    </button>
  );
}

export default ButtonText;
