import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ButtonIcon from "../shared/ButtonIcon";
import Image from "../shared/Image";
import CardTitle from "../shared/CardTitle";
import MinusPlusInput from "../shared/MinusPlusInput";

function CardCarrito() {
  return (
    <div className="flex bg-white rounded-lg shadow-md md:flex-row md:max-w-xl">
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
          {/* ----------------------CAMBIAR POR COMPONENTE-------------------------- */}
          <p className="text-lg">#prod</p>
          <div className="flex gap-10">
            <div>
              <MinusPlusInput />
            </div>
            <div>
              <p className="text-xl text-black">$80.00</p>
            </div>
          </div>
          {/* ----------------------CAMBIAR POR COMPONENTE-------------------------- */}
        </div>
      </a>
      <div className="flex relative h-15">
        <div className="flex items-center rounded-r-lg inset-y-0 right-0 bg-pink-0">
          <ButtonIcon
            bgColor="bg-pink"
            txColor="text-white"
            icon={<IoTrashBinSharp size={20} />}
          />
        </div>
      </div>
    </div>
  );
}

export default CardCarrito;
