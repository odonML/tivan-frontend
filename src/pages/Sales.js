import React, { useState } from "react";
import TitleSection from "../components/shared/TitleSection";
import CardTicket from "../components/CardTicket/CardTicket";

function Sales() {
  const [tab] = useState(1);

  return (
    <div className="relative bg-gray-3 w-full h-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 p-1">
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } sm:grid col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 m-2 gap-2 h-0`}
      >
        <div className="flex">
          <TitleSection text="Ventas" locked={true} />
        </div>
        <CardTicket />
        <CardTicket />
        <CardTicket />
      </div>
      <div
        className={`${
          tab === 2 ? "grid col-span-1 row-span-1" : "hidden"
        } sm:grid sm:row-span-4 border`}
      >
        <p>Ticket</p>
      </div>
    </div>
  );
}

export default Sales;
