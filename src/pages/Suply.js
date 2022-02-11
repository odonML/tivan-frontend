import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ContentGrid from "../components/shared/ContentGrid";
import CardSuply from "../components/CardSuply/CardSuply";
import ContentLeft from "../components/shared/ContentLeft";
import ButtonIcon from "../components/shared/ButtonIcon";

function Suply() {
  const [tab] = useState(1);

  return (
    <ContentGrid>
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-4 md:row-span-4`}
      >
        <ContentLeft
          title="Suply"
          element={
            <div>
              <ButtonIcon icon={<AiOutlinePlus size={22} />} />
            </div>
          }
        >
          <div className="grid gap-3 grid-col-2 col-span-1 md:col-span-2 lg:col-span-1 h-36 sm:h-24 ">
            <CardSuply />
            <CardSuply />
            <CardSuply />
          </div>
        </ContentLeft>
      </div>
    </ContentGrid>
  );
}

export default Suply;
