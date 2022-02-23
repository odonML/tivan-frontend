import React from "react";
import Content from "../shared/Content";

function ticketDetails({ ticketDaraDetails }) {
  const { Orden = [], Producto = [] } = ticketDaraDetails;
  const [orden = {}] = Orden;
  const [...products] = Producto;
  const { idOrden = 0, costoTotal = 0 } = orden;
  console.log(ticketDaraDetails);

  return (
    <Content>
      <div className="w-full h-[100%] bg-white rounded-md p-2">
        <div className="w-full flex items-center justify-between text-xl">
          <p className="font.bold">#{idOrden}</p>
          <div className="flex flex-row ">
            <p className="text-black mr-2">Total:</p>
            <p>${costoTotal}</p>
          </div>
        </div>
        <div className="bg-pink-0 h-1 my-1"></div>
        <div className="flex flex-col">
          {products.map((product) => (
            <div
              key={product.idProducto}
              className="flex flex-row p-2 gap-4 items-center justify-between text-sm"
            >
              <p className="text-black">{product.comun}</p>
              <div className="flex gap-4">
                <p>2 piezas</p>
                <p>$12.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Content>
  );
}

export default ticketDetails;
