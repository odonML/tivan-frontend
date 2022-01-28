import React from "react";

function ControlsShopping({
  bgColor = "bg-white",
  radio = "rounded-full",
  display = "flex",
  alingItems = "items-center",
  children = null,
}) {
  return (
    <div className={`w-full p-1 ${radio} ${display} ${alingItems} ${bgColor}`}>
      {/* {iconLeft}
      <div className="w-full px-2 flex items-center border">{middle}</div>
      {iconRight} */}
      {children}
    </div>
  );
}

export default ControlsShopping;
