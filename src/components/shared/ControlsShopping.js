import React from "react";
import { BsUpcScan } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import ButtonIcon from "./ButtonIcon";
import Select from "./Select";

function ControlsShopping({
  bgColor = "bg-white",
  reverse = false,
  actionBtnLeft = null,
  actionBtnRight = null,
  selectAction = null,
  selectOptions = [],
}) {
  return (
    <div
      className={`w-full p-1 rounded-full flex items-center ${
        reverse ? "flex-row-reverse" : "flex-row"
      } ${bgColor}`}
    >
      <ButtonIcon icon={<BsUpcScan size={20} />} click={actionBtnLeft} />
      <div className="w-full px-2 flex items-center">
        <Select msj="hola" options={selectOptions} action={selectAction} />
      </div>
      <ButtonIcon
        icon={<RiMoneyDollarCircleLine size={20} />}
        click={actionBtnRight}
      />
    </div>
  );
}

export default ControlsShopping;