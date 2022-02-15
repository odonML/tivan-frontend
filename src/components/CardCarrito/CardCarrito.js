import CardTitle from "components/shared/CardTitle";
import MinusPlusInput from "components/shared/MinusPlusInput";
import React, { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import Image from "../shared/Image";

function CardCarrito({
  product: {
    img = "",
    nameProduct = "",
    keyNameProduct = "",
    piecesProduct = 0,
    priceProduct = 0,
  },
  actionDeleteOfCar = null,
}) {
  const [priceOfProduct, setPriceOfProduct] = useState(priceProduct);
  const [piecesForShop, setPiecesForShop] = useState(1);

  const handlePlus = () => {
    setPiecesForShop(piecesForShop + 1);
  };
  const handleMinus = () => {
    setPiecesForShop(piecesForShop - 1);
  };

  useEffect(() => {
    setPriceOfProduct(priceProduct * piecesForShop);
  }, [piecesForShop]);

  return (
    <div className="relative w-full h-full pr-6 p-1 flex items-center justify-center bg-white rounded-lg shadow-md">
      <div className="w-16 sm:w-20 h-full flex items-center justify-center">
        <Image
          className="object-cover rounded-t-lg md:h-auto md:w-48
          md:rounded-none md:rounded-l-lg"
          img={img}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between pl-1">
        <div className="flex flex-col">
          <CardTitle text={nameProduct} />
          <p className="text-sm sm:hidden md:block lg:block">
            {keyNameProduct}
          </p>
        </div>
        <div className="flex flex-row items-start justify-between flex-wrap lg:flex-row lg:items-center ">
          <div>
            <p className="text-base md:text-lg lg:text-base text-black">
              ${priceOfProduct}
            </p>
          </div>
          <div className="w-24 sm:w-20 lg:w-24 h-5">
            <MinusPlusInput
              callbackPlus={handlePlus}
              callbackMinus={handleMinus}
              value={piecesForShop}
            />
          </div>
        </div>
      </div>
      <div
        onClick={actionDeleteOfCar}
        className="absolute cursor-pointer top-0 right-0 w-5 h-full flex items-center justify-center rounded-r-lg inset-y-0 bg-pink-0 text-white"
      >
        <IoTrashBinSharp size={20} />
      </div>
    </div>
  );
}

export default CardCarrito;
