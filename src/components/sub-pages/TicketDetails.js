import React from "react";
import Content from "../shared/Content";

function ticketDetails({
  ticketDetails: {
    idProducto = 0,
    comun = "",
    cantidad = 0,
    precio = 0,
    totalTicket = 0,
  },
}) {
  return (
    <Content>
      <div className="w-full h-[100%] bg-white rounded-md p-2">
        <p className="text-4xl font.bold">{idProducto}#000</p>
        <div className="bg-pink-0 h-1 my-1"></div>
        <div className="flex flex-col">
          <div className="flex flex-row p-2 gap-4 justify-items-stretch">
            <p className="text-black">{comun}Sabritas Original 45g</p>
            <p>{cantidad} piezas</p>
            <p>{precio}$160.00</p>
          </div>
          <div className="flex flex-row gap-2 justify-end">
            <p className="text-black">TOTAL:</p>
            <p>{totalTicket}$160.00</p>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ticketDetails;
