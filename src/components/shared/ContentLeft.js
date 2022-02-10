import React from "react";
import Content from "./Content";
import ContentTitle from "./ContentTitle";

function ContentLeft({ children, title, element }) {
  return (
    <Content>
      <ContentTitle>
        <p>{title}</p>
        {element}
      </ContentTitle>
      <div className="w-full h-[89%] md:h-[92%] py-1 px-2 grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-scroll custom-scroll">
        {children}
      </div>
    </Content>
  );
}

export default ContentLeft;
