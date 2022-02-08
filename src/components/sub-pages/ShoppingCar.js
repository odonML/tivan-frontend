import React from "react";
import Content from "../shared/Content";
import ContentTitle from "../shared/ContentTitle";
import ControlsShopping from "../shared/ControlsShopping";

function ShoppingCar() {
  return (
    <Content>
      <ContentTitle>
        <p>Carrito</p>
      </ContentTitle>
      <div className="w-full h-[85%]"></div>
      <ControlsShopping></ControlsShopping>
    </Content>
  );
}

export default ShoppingCar;
