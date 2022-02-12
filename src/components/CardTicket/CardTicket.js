import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ButtonDelete from "../shared/ButtonDelete";

function CardTicket({
  ticketNumber,
  date,
  time,
  priceProduct,
  clickCard,
  delet,
}) {
  return (
    <div className="relative flex w-full h-10 m-2">
      <div
        onClick={clickCard}
        className="flex flex-row items-center justify-between w-full sm:grow-0 bg-white rounded-lg shadow-md px-1 py-2 cursor-pointer hover:bg-pink-3"
      >
        <div className="text-lg text-black">{ticketNumber}#001</div>
        <div className="text-lg">{date}01-01-2022</div>
        <div className="text-lg">{time}20:00</div>
        <div className="text-lg text-black">{priceProduct}$80.00</div>
        <div className="px-1">
          <div className="absolute flex h-15 items-center rounded-r-lg inset-y-0 right-0 bg-pink-0">
            <ButtonDelete
              bgColor="bg-pink"
              txColor="text-white"
              icon={<IoTrashBinSharp size={20} />}
              onClick={delet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTicket;
