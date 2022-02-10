import React from "react";
import Content from "components/shared/Content";
import CardSuply from "../CardSuply/CardSuply";

function SuplyCards() {
  return (
    <Content>
      <div className="w-full h-[100%] p-3 grid grid-cols-1 sm:grid-cols-4 gap-3 overflow-y-scroll custom-scroll">
        <div>
          <CardSuply />
        </div>
        <div>
          <CardSuply />
        </div>
      </div>
    </Content>
  );
}

export default SuplyCards;
