import React from "react";
import { BsUpcScan } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import ButtonIcon from "./ButtonIcon";
import Select from "./Select";

function ControlsShopping({
  bgColor = "bg-white",
  reverse = false,
  actionBtnLeft = null,
  actionBtnRight = null,
  selectAction = null,
  costoTotal = 0,
}) {
  const metodos = [
    { id: 1, value: "Efectivo" },
    { id: 2, value: "Tarjeta" },
  ];
  return (
    <div
      className={`w-full h-full p-1 rounded-full flex items-center ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${bgColor}`}
    >
      <ButtonIcon icon={<BsUpcScan size={20} />} click={actionBtnLeft} />
      <div className="w-full px-1 flex items-center justify-between">
        <div className="w-auto max-w-20 mx-2 ">
          <Select msj="Pago" options={metodos} action={selectAction} />
        </div>
        <div className="mx-2">
          <p className="text-lg text">${costoTotal}</p>
        </div>
      </div>
      <ButtonIcon icon={<MdAttachMoney size={20} />} click={actionBtnRight} />
    </div>
  );
}

export default ControlsShopping;
