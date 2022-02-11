import React from "react";
import Content from "../shared/Content";

function TicketDetails() {
  return (
    <Content>
      <div className="w-full h-[100%] bg-white rounded-md p-2">
        <p className="text-4xl font.bold">#0000</p>
        <div className="bg-pink-0 h-1 my-1"></div>
        <div className="flex flex-col">
          <div className="flex flex-row p-2 gap-4 text-xl justify-items-stretch">
            <p className="text-black text-bold">Sabritas Original 45g</p>
            <p>piezas 2</p>
            <p>$160.00</p>
          </div>
          <div className="flex flex-row gap-2 justify-end">
            <p className="text-black">TOTAL:</p>
            <p>$160.00</p>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default TicketDetails;
