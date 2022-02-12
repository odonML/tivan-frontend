// import FormProduct from "../components/Form/FormProduct";
import { Drawer } from "antd";
import CardProduct from "components/CardProduct/CardProduct";
import FormProduct from "components/Form/FormProduct";
import ButtonIcon from "components/shared/ButtonIcon";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import React, { useState } from "react";

function Stock() {
  const [dataProduct, setDataProduct] = useState();
  const products = [
    {
      id: 1,
      nameProduct: "sabritas",
      keyNameProduct: "#SaSal",
      descriptionProduct: "Papas con sal",
      piecesProduct: 4,
      priceProduct: 20.0,
      img: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
    },
    {
      id: 2,
      nameProduct: "Sabritas Adobadas",
      keyNameProduct: "#SaAdo",
      descriptionProduct: "Papas con sal y picante",
      piecesProduct: 10,
      priceProduct: 20.0,
      img: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
    },
  ];

  // drawer
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  // form
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <ContentGrid>
      <div className="grid md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-6 md:row-span-4">
        <ContentLeft
          title="Inventario"
          element={<ButtonIcon />}
          gridCols="sm:grid-cols-3"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="col-span-1 md:col-span-2 lg:col-span-1 h-36 sm:h-24"
            >
              <CardProduct
                product={product}
                clickCard={() => {
                  showDrawer();
                  setDataProduct(product);
                }}
              />
            </div>
          ))}
        </ContentLeft>
      </div>

      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <FormProduct onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </Drawer>
      {/* <div className="grid col-span-2 row-span-1 md:grid md:col-span-3 lg:col-span-2 md:row-span-4">
        <ContentRight title="Detalles">
          <div className="col-span-1 h-full">
            <FormProduct
              // dataProduct={dataProduct}
              click={(data) => console.log("padre", data)}
            ></FormProduct>
          </div>
        </ContentRight>
      </div> */}
    </ContentGrid>
  );
}

export default Stock;
