import React from "react";
import Content from "./Content";
import ContentTitle from "./ContentTitle";

function ContentLeft({
  children,
  title,
  element,
  gridCols = "sm:grid-cols-2 2xl:grid-cols-4",
}) {
  return (
    <Content>
      <ContentTitle>
        <p>{title}</p>
        {element}
      </ContentTitle>
      <div
        className={`w-full max-h-[89%] lg:max-h-[92%] lg:h-auto py-1 px-2 grid grid-cols-1 ${gridCols} gap-2 overflow-y-scroll custom-scroll`}
      >
        {children}
      </div>
    </Content>
  );
}

export default ContentLeft;
