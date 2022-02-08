import React from "react";

function Content({ children }) {
  return (
    <div className="w-full h-[100%] sm:p-1 bg-gray-3 sm:rounded-lg overflow-hidden">
      {children}
    </div>
  );
}

export default Content;
