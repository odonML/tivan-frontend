import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ButtonDelete from "../shared/ButtonDelete";

function CardTicket() {
  return (
    <div className="flex">
      <div className="flex flex-row shrink-0 grow sm:grow-0 bg-white rounded-lg shadow-md px-5 py-2 gap-x-4 leading-normal justify-items-start">
        <div className="text-lg text-black">No. 01</div>
        <div className="text-lg">01-01-2022</div>
        <div className="text-lg">20:55</div>
        <div className="text-lg text-black">$100.00</div>
      </div>

      <div className="flex h-15 items-center rounded-r-lg inset-y-0 right-0 bg-pink-0">
        <ButtonDelete
          bgColor="bg-pink"
          txColor="text-white"
          icon={<IoTrashBinSharp size={20} />}
        />
      </div>
    </div>
  );
}

export default CardTicket;
