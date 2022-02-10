import ButtonCheckbox from "components/shared/ButtonCheckbox";
import ButtonIcon from "components/shared/ButtonIcon";
import CardDescription from "components/shared/CardDescription";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";

function CardProduct() {
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
        <p className="text-xs">3 piezas</p>
        <p className="text-lg">$80.00</p>
      </div>
      <div className="absolute flex w-full bottom-0 p-1 justify-between">
        <ButtonCheckbox
          iconActive={<AiFillStar size={20} />}
          iconNoActice={<AiOutlineStar size={20} />}
          click={(e) => console.log("Value", e)}
        />
        <ButtonIcon
          bgColor="bg-yellow-0"
          txColor="text-purple-0"
          icon={<FaShoppingCart size={22} />}
        />
      </div>
    </div>
  );
}

export default CardProduct;
