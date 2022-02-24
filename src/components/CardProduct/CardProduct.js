import ButtonCheckbox from "components/shared/ButtonCheckbox";
import ButtonIcon from "components/shared/ButtonIcon";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CardTitle from "../shared/CardTitle";
import Image from "../shared/Image";

function CardProduct({
  product: {
    image = "",
    comun = "",
    clave = "",
    descripcion = "",
    cantidad = 0,
    precio = 0,
    favorito = 0,
  },
  addFavorite = null,
  addShoppingCard = null,
  clickCard = null,
}) {
  return (
    <div
      className={` relative w-full h-full p-1 flex items-center justify-center bg-white rounded-lg shadow-md`}
    >
      <div
        className={`w-16 sm:w-20 h-full flex items-center justify-center mr-3 overflow-hidden rounded-lg ${
          clickCard !== null ? "cursor-pointer" : ""
        }`}
      >
        <Image click={clickCard} className="object-cover" img={image} />
        <div className="absolute bottom-0 left-0 m-1">
          {/* Favorite */}
          {addFavorite !== null ? (
            <ButtonCheckbox
              iconActive={<AiFillStar size={20} />}
              iconNoActice={<AiOutlineStar size={20} />}
              click={addFavorite}
              fav={favorito}
              bgColorActive="bg-purple-0"
              txColorActive="text-yellow-0"
              bgColorNoActive="bg-gray-0"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        onClick={clickCard}
        className={`w-full h-full flex flex-col justify-center py-1 ${
          clickCard !== null ? "cursor-pointer" : ""
        }`}
      >
        <CardTitle text={comun} />
        <p className="text-xs">{clave}</p>
        <p className="text-xs">{descripcion}</p>
        <p className="text-xs">{cantidad} piezas</p>
        <p className="text-lg">${precio}</p>
      </div>
      <div className="absolute  bottom-0 right-0 m-1">
        {/* Shopping Car */}
        {addShoppingCard !== null ? (
          <ButtonIcon
            bgColor="bg-yellow-0"
            txColor="text-purple-0"
            icon={<MdOutlineAddShoppingCart size={22} />}
            click={addShoppingCard}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CardProduct;
