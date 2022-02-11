import React from "react";
import CardDescription from "../shared/CardDescription";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";
import MinusPlusInput from "../shared/MinusPlusInput";

function CardSuply() {
  return (
    <div
      className={` relative w-full h-full flex items-center justify-center bg-white rounded-lg shadow-md`}
    >
      <div className="w-36 sm:w-24 h-full flex items-center justify-center">
        <Image
          className="object-cover rounded-t-lg md:h-auto md:w-48
          md:rounded-none md:rounded-l-lg"
          img="https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center pl-1">
        <CardTitle text="sabritas original 45g" />
        <CardDescription text="Botana con sal" />
        <p className="text-xs">#PRODUCTO</p>
      </div>
      <div className="self-end py-3 px-2">
        <MinusPlusInput />
      </div>
    </div>
  );
}

export default CardSuply;
