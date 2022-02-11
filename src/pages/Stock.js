import CardProduct from "components/CardProduct/CardProduct";
import ButtonIcon from "components/shared/ButtonIcon";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import React, { useState } from "react";
import FormProduct from "../components/Form/FormProduct";

function Stock() {
  const [dataProduct, setDataProduct] = useState();
  const products = [
    {
      name: "Sabritas",
    },
  ];
  return (
    <ContentGrid>
      <div className="grid md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-4 md:row-span-4 border border-pink-0">
        <ContentLeft title="Inventario" element={<ButtonIcon />}>
          {products.map((product) => (
            <div className="col-span-1 md:col-span-2 lg:col-span-1 h-36 sm:h-24">
              <CardProduct
                nameProduct={product.name}
                clickCard={() => setDataProduct(product)}
              />
            </div>
          ))}
        </ContentLeft>
      </div>

      <div className="grid col-span-2 row-span-1 md:grid md:col-span-3 lg:col-span-2 md:row-span-4">
        <ContentRight title="Detalles">
          <div className="col-span-1 h-full">
            <FormProduct
              dataProduct={dataProduct}
              click={(data) => console.log("padre", data)}
            ></FormProduct>
          </div>
        </ContentRight>
      </div>
    </ContentGrid>
  );
}

export default Stock;
