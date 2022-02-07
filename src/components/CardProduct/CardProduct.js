import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import CardDescription from "../shared/CardDescription";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";
import ButtonIcon from "../shared/ButtonIcon";
import ButtonCheckbox from "../shared/ButtonCheckbox";

function CardProduct() {
  return (
    <div>
      <div className="">
        <a
          href="./CardProduct.js"
          className="flex bg-white rounded-lg shadow-md md:flex-row md:max-w-xl p-2 hover:bg-gray-100"
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
            <p className="text-lg">3 piezas</p>
            <p className="text-xl text-black">$80.00</p>
            {/* ----------------------CAMBIAR POR COMPONENTE-------------------------- */}
          </div>
        </a>
        <div className="flex relative bottom-10 px-2 justify-between">
          <ButtonCheckbox
            iconActive={<AiFillStar size={20} />}
            iconNoActice={<AiOutlineStar size={20} />}
            click={(e) => console.log("Value", e)}
          />
          <ButtonIcon
            bgColor="bg-yellow-0"
            txColor="text-purple-0"
            icon={<FaShoppingCart size={20} />}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
