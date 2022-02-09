import CardCarrito from "components/CardCarrito/CardCarrito";
import React from "react";
import Content from "../shared/Content";
import ContentTitle from "../shared/ContentTitle";
import ControlsShopping from "../shared/ControlsShopping";

function ShoppingCar() {
  return (
    <Content bgColor="bg-gray-3">
      <ContentTitle>
        <p>Carrito</p>
      </ContentTitle>
      <div className="h-[83%] md:h-[86%] py-1 px-2 grid grid-cols-1 gap-2 overflow-y-scroll custom-scroll">
        <div className="col-span-1 h-24 sm:h-20 md:h-28 lg:h-20">
          <CardCarrito />
        </div>
      </div>
      <div className="relative w-full h-[7%]">
        <ControlsShopping></ControlsShopping>
      </div>
    </Content>
  );
}

export default ShoppingCar;
