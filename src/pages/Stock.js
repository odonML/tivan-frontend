import { Drawer } from "antd";
import CardProduct from "components/CardProduct/CardProduct";
import FormProduct from "components/Form/FormProduct";
import ButtonIcon from "components/shared/ButtonIcon";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Stock() {
  const [dataProduct, setDataProduct] = useState();
  const [operation, setOperation] = useState("");
  const products = [
    {
      id: 1,
      nameProduct: "sabritas",
      keyNameProduct: "#SaSal",
      descriptionProduct: "Papas con sal",
      piecesProduct: 4,
      minusPiecesProduct: 2,
      priceProduct: 20.0,
      barCode: 123456789,
      dateAddStockProduct: "01-12-22",
      img: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
    },
    {
      id: 2,
      nameProduct: "Sabritas Adobadas",
      keyNameProduct: "#SaAdo",
      descriptionProduct: "Papas con sal y picante",
      piecesProduct: 10,
      minusPiecesProduct: 5,
      priceProduct: 20.0,
      barCode: 123456789,
      dateAddStockProduct: "01-12-22",
      img: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
    },
  ];

  // drawer
  const [visible, setVisible] = useState(false);
  const showDrawer = (op) => {
    setVisible(true);
    setOperation(op);
  };
  const onClose = () => {
    setVisible(false);
    setDataProduct({});
    setOperation("add");
  };
  // form
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  // form error
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // console.log("data", dataProduct);
  return (
    <ContentGrid>
      <div className="grid md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-6 md:row-span-4">
        <ContentLeft
          title="Inventario"
          element={
            <ButtonIcon
              icon={<AiOutlinePlus />}
              click={() => showDrawer("add")}
            />
          }
          gridCols="sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="col-span-1 md:col-span-2 lg:col-span-1 h-auto"
            >
              <CardProduct
                product={product}
                clickCard={() => {
                  showDrawer("edit");
                  setDataProduct(product);
                }}
              />
            </div>
          ))}
        </ContentLeft>
      </div>

      <Drawer
        title="Detalle"
        placement="right"
        onClose={onClose}
        visible={visible}
        className="h-full"
      >
        <FormProduct
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          operation={operation}
          data={dataProduct}
        />
      </Drawer>
    </ContentGrid>
  );
}

export default Stock;
