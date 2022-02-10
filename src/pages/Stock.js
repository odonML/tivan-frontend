import CardProduct from "components/CardProduct/CardProduct";
import ButtonIcon from "components/shared/ButtonIcon";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import React from "react";
import FormProduct from "../components/Form/FormProduct";

function Stock() {
  return (
    <ContentGrid>
      <div className="grid md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-4 md:row-span-4 border border-pink-0">
        <ContentLeft title="Inventario" element={<ButtonIcon />}>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 h-36 sm:h-24">
            <CardProduct />
          </div>
        </ContentLeft>
      </div>

      <div className="grid col-span-2 row-span-1 md:grid md:col-span-3 lg:col-span-2 md:row-span-4">
        <ContentRight title="Detalles">
          <div className="col-span-1 h-full">
            <FormProduct></FormProduct>
          </div>
        </ContentRight>
      </div>
    </ContentGrid>
  );
}

export default Stock;
