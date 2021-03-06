import React from "react";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";
import MinusPlusInput from "../shared/MinusPlusInput";

function CardSuply({
  productSuply: {
    idProducto,
    image,
    comun = "",
    clave = "",
    cantidad = "",
    cantidadMinima = "",
  },
  handleCapture,
}) {
  return (
    <div className="relative w-full h-full pr-6 p-1 flex items-center justify-center bg-white rounded-lg shadow-md">
      <div className="w-16 sm:w-20 h-full flex items-center justify-center mr-3 overflow-hidden rounded-lg">
        <Image className="object-cover" img={image} />
      </div>
      <div className="w-full h-full flex flex-col justify-between pl-1">
        <div className="flex flex-col">
          <CardTitle text={comun} />
          <p>{clave}</p>
          <p>{cantidad} piezas</p>
          <p>MÍnimo de piezas: {cantidadMinima}</p>
        </div>
        <div className="flex justify-end">
          <div className="w-24 sm:w-20 h-5">
            <MinusPlusInput
              callback={handleCapture}
              id={idProducto}
              value={0}
              minValue={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSuply;
