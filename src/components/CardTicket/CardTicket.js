import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import ButtonDelete from "../shared/ButtonDelete";

function CardTicket({
  ticket: {
    idOrden = 0,
    fechaCreacion = 0,
    horaCreacion = 0,
    costoTotal = 0,
    clickCard = null,
    delet,
  },
}) {
  return (
    <div className="relative flex w-full h-10 m-2">
      <div
        onClick={clickCard}
        className="flex flex-row items-center justify-between w-full h-full sm:grow-0 bg-white rounded-lg shadow-md px-1 py-2 cursor-pointer hover:bg-pink-3"
      >
        <div className="text-lg text-black">#{idOrden}</div>
        <div className="text-lg">{fechaCreacion}</div>
        <div className="text-lg">{horaCreacion}</div>
        <div className="text-lg text-black">${costoTotal}</div>
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
