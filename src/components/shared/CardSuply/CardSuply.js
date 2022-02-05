import React from "react";
import CardDescription from "../CardDescription";
import CardTitle from "../CardTitle";
import Image from "../Image";
import MinusPlusInput from "../MinusPlusInput";

function CardSuply() {
  return (
    <div>
      <a
        href="/"
        className="flex bg-white rounded-lg shadow-md p-2 md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <div className="w-20">
          <Image
            className="object-cover rounded-t-lg md:h-auto md:w-48
          md:rounded-none md:rounded-l-lg"
            img="https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg"
          />
        </div>
        <div className="flex-col p-2 leading-normal grid justify-items-start">
          <CardTitle text="sabritas original 45g" />
          <CardDescription text="botana de papa con sal" />
          {/* ----------------------CAMBIAR POR COMPONENTE-------------------------- */}
          <p className="text-lg">#prod</p>
          {/* ----------------------CAMBIAR POR COMPONENTE-------------------------- */}
        </div>
        <div className="self-end py-3 px-2">
          <MinusPlusInput />
        </div>
      </a>
    </div>
  );
}

export default CardSuply;
