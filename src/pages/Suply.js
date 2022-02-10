import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ContentGrid from "../components/shared/ContentGrid";
import SuplyCards from "../components/sub-pages/SuplyCards";
import ContentTitle from "../components/shared/ContentTitle";
import ButtonIcon from "../components/shared/ButtonIcon";

function Suply() {
  const [tab] = useState(1);

  return (
    <ContentGrid bgColor="bg-gray-3">
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } sm:grid col-span-1 row-span-1 md:col-span-6 md:row-span-6 h-1 m-2 p-2 gap-2`}
      >
        <div>
          <ContentTitle>
            <p>Surtir</p>
            <ButtonIcon icon={<AiOutlinePlus size={22} />} />
          </ContentTitle>
        </div>
        <div className="w-200 h-200">
          <SuplyCards />
        </div>
      </div>
    </ContentGrid>
  );
}

export default Suply;
