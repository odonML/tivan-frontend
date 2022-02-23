import React from "react";
import Content from "../shared/Content";

function ticketDetails({ ticketDetails: { idOrden = 0, costoTotal = 100 } }) {
  return (
    <Content>
      <div className="w-full h-[100%] bg-white rounded-md p-2">
        <p className="text-4xl font.bold">{idOrden}</p>
        <div className="bg-pink-0 h-1 my-1"></div>
        <div className="flex flex-col">
          <div className="flex flex-row p-2 gap-4 justify-items-stretch">
            <p className="text-black">sabritas</p>
            <p>2 piezas</p>
            <p>$12.00</p>
          </div>
          <div className="flex flex-row gap-2 justify-end">
            <p className="text-black">TOTAL:</p>
            <p>{costoTotal}</p>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ticketDetails;
