import React from "react";

function ContentGrid({
  children,
  position = "relative",
  height = "h-full",
  width = "w-full",
  bgColor = "bg-white",
  gridGap = "gap-1",
  gridCol = "grid-cols-1 md:grid-cols-6",
  gridRow = "grid-rows-1 md:grid-rows-4",
  extra = "",
}) {
  return (
    <div
      className={`${position} ${bgColor} ${width} ${height} grid ${gridGap} ${gridCol} ${gridRow} ${extra}`}
    >
      {children}
    </div>
  );
}

export default ContentGrid;
