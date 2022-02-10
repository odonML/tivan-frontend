import React from "react";

function Content({ children, bgColor = "bg-white" }) {
  return (
    <div
      className={`w-full h-[100%] sm:p-1 ${bgColor} sm:rounded-lg overflow-hidden`}
    >
      {children}
    </div>
  );
}

export default Content;
