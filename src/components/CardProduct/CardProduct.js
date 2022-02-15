import ButtonCheckbox from "components/shared/ButtonCheckbox";
import ButtonIcon from "components/shared/ButtonIcon";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";

function CardProduct({
  product: {
    img = "",
    nameProduct = "",
    keyNameProduct = "",
    descriptionProduct = "",
    piecesProduct = 0,
    priceProduct = 0,
  },
  addFavorite = null,
  addShoppingCard = null,
  clickCard = null,
}) {
  return (
    <div
      className={` relative w-full h-full flex items-center justify-center bg-white rounded-lg shadow-md`}
    >
      <div className=" w-16 sm:w-20 h-full flex items-center justify-center cursor-pointer">
        <Image
          click={clickCard}
          className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          img={img}
        />
        <div className="absolute bottom-0 left-0 m-1">
          {/* Favorite */}
          <ButtonCheckbox
            iconActive={<AiFillStar size={20} />}
            iconNoActice={<AiOutlineStar size={20} />}
            click={addFavorite}
          />
        </div>
      </div>
      <div
        onClick={clickCard}
        className="w-full h-full flex flex-col justify-center py-1"
      >
        <CardTitle text={nameProduct} />
        <p className="text-xs">{keyNameProduct}</p>
        <p className="text-xs">{descriptionProduct}</p>
        <p className="text-xs">{piecesProduct} piezas</p>
        <p className="text-lg">${priceProduct}</p>
      </div>
      <div className="absolute  bottom-0 right-0 m-1">
        {/* Shopping Car */}
        <ButtonIcon
          bgColor="bg-yellow-0"
          txColor="text-purple-0"
          icon={<MdOutlineAddShoppingCart size={22} />}
          click={addShoppingCard}
        />
      </div>
    </div>
  );
}

export default CardProduct;
