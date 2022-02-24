import React from "react";

function ContentTitle({ children }) {
  return (
    <div className="text-base md:text-lg 2xl:text-2xl h-[5%] py-4 px-3 flex items-center justify-between">
      {children}
    </div>
  );
}

export default ContentTitle;
