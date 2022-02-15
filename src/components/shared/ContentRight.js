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
      <div className={`${controls ? "h-[83%]" : "h-[90%]"} lg:h-[85%] `}>
        <div
          className={` border max-h-full h-auto py-1 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 overflow-y-scroll custom-scroll`}
        >
          {children}
        </div>
      </div>
      {controls ? <div className="relative w-full h-[7%]">{controls}</div> : ""}
    </Content>
  );
}

export default ContentRight;
