import React from "react";

function ContentTitle({ children }) {
  return (
    <div className="h-[5%] px-2 flex items-center justify-between">
      {children}
    </div>
  );
}

export default ContentTitle;
