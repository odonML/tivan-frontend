import React from "react";
import Content from "./Content";
import ContentTitle from "./ContentTitle";

function ContentRight({ children, title, element, controls }) {
  return (
    <Content bgColor="bg-gray-3">
      <ContentTitle>
        <p>{title}</p>
        {element}
      </ContentTitle>
      <div
        className={`${
          controls ? "h-[83%] md:h-[86%]" : "h-[89%] md:h-[92%]"
        } py-1 px-2 grid grid-cols-1 gap-2 overflow-y-scroll custom-scroll`}
      >
        {children}
      </div>
      {controls ? <div className="relative w-full h-[7%]">{controls}</div> : ""}
    </Content>
  );
}

export default ContentRight;
