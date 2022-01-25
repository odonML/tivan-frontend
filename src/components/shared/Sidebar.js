import React from "react";

function Sidebar({ children, bgColor = "bg-purple-0" }) {
  return (
    <div
      className={`w-full h-full ${bgColor} flex items-center justify-between md:w-14 md:py-5 md:flex-col md:bg-purple-1`}
    >
      {children}
    </div>
  );
}

export default Sidebar;
