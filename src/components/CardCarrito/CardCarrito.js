import CardTitle from "components/shared/CardTitle";
import MinusPlusInput from "components/shared/MinusPlusInput";
import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import Image from "../shared/Image";

function CardCarrito() {
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
          <CardTitle text="sabritas original 45g" />
          <p className="text-sm md:hidden lg:block">#prod</p>
        </div>
        <div className="flex flex-row items-start justify-between md:flex-col lg:items-center lg:flex-row">
          <div>
            <p className="text-base md:text-lg text-black">$80.00</p>
          </div>
          <div className="w-24 sm:w-20 h-5">
            {/* h-24 sm:h-20 md:h-28 lg:h-20 */}
            <MinusPlusInput />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-5 h-full flex items-center justify-center rounded-r-lg inset-y-0 bg-pink-0 text-white">
        <IoTrashBinSharp size={20} />
      </div>
    </div>
  );
}

export default CardCarrito;
