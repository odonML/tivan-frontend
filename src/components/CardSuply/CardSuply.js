import React from "react";
import CardDescription from "../shared/CardDescription";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";
import MinusPlusInput from "../shared/MinusPlusInput";

function CardSuply({
  productSuply: { comun = "", descripcion = "", clave = "" },
}) {
  return (
    <div className="relative w-full h-full pr-6 p-1 flex items-center justify-center bg-white rounded-lg shadow-md">
      <div className="w-16 sm:w-20 h-full flex items-center justify-center">
        <Image
          className="object-cover rounded-t-lg md:h-auto md:w-48
          md:rounded-none md:rounded-l-lg"
          img="https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between pl-1">
        <div className="flex flex-col">
          <CardTitle text={comun} />
          <CardDescription text={descripcion} />
          <p>{clave}</p>
        </div>
        <div className="flex justify-end">
          <div className="w-24 sm:w-20 h-5">
            <MinusPlusInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSuply;
