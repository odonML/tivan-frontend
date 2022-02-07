import React from "react";

function Container({
  children,
  width = "w-full",
  height = "h-full",
  display = "flex",
  flexDirection = "flex-row",
  justifyContent = "justify-center",
  alingItems = "items-center",
  mediaQueries = "",
}) {
  return (
    <div
      className={`${width} ${height} ${display} ${flexDirection} ${justifyContent} ${alingItems} ${mediaQueries}`}
    >
      {children}
    </div>
  );
}

export default Container;
