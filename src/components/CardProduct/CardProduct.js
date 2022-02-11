import ButtonCheckbox from "components/shared/ButtonCheckbox";
import ButtonIcon from "components/shared/ButtonIcon";
import CardDescription from "components/shared/CardDescription";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";

function CardProduct({
  img,
  nameProduct,
  descriptionProduct,
  piecesProduct,
  priceProduct,
  addFavorite,
  addShoppingCard,
  clickCard,
}) {
  return (
    <div
      className={` relative w-full h-full flex items-center justify-center bg-white rounded-lg shadow-md`}
    >
      <div
        onClick={clickCard}
        className="w-36 sm:w-24 h-full flex items-center justify-center cursor-pointer"
      >
        <Image
          className="object-cover rounded-t-lg md:h-auto md:w-48
          md:rounded-none md:rounded-l-lg"
          img={
            img ||
            "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg"
          }
        />
      </div>
      <div
        onClick={clickCard}
        className="w-full h-full flex flex-col justify-center pl-1"
      >
        <CardTitle text={nameProduct} />
        <CardDescription text={descriptionProduct} />
        <p className="text-xs">{piecesProduct}</p>
        <p className="text-lg">{priceProduct}</p>
      </div>
      <div className="absolute flex w-full bottom-0 p-1 justify-between">
        {/* Favorite */}
        <ButtonCheckbox
          iconActive={<AiFillStar size={20} />}
          iconNoActice={<AiOutlineStar size={20} />}
          click={addFavorite}
        />
        {/* Shopping Car */}
        <ButtonIcon
          bgColor="bg-yellow-0"
          txColor="text-purple-0"
          icon={<FaShoppingCart size={22} />}
          click={addShoppingCard}
        />
      </div>
    </div>
  );
}

export default CardProduct;
