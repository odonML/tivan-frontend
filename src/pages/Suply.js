import React, { useState } from "react";
import CardSuply from "../components/CardSuply/CardSuply";
import TitleSection from "../components/shared/TitleSection";

function Sales() {
  const [tab] = useState(1);

  return (
    <div className="relative bg-gray-3 w-full h-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-4 p-2">
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } sm:grid col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 gap-2`}
      >
        <div className="flex">
          <TitleSection text="Surtir" locked={true} />
        </div>
        <CardSuply />
        <CardSuply />
        <CardSuply />
      </div>
    </div>
  );
}

export default Sales;
