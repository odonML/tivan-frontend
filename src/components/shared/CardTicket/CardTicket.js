import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ButtonIcon from "../ButtonIcon";

function CardTicket() {
  return (
    <div className="flex bg-white rounded-lg shadow-md md:flex-row md:max-w-xl">
      <div className="flex flex-row p-2 gap-x-3 leading-normal justify-items-start">
        <div className="text-lg text-black">No. 01</div>
        <div className="text-lg text-black">$80.00</div>
        <div className="text-lg">01-01-2022</div>
        <div className="text-lg">18:55</div>
      </div>
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

export default CardTicket;
