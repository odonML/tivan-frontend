import React, { useEffect, useState } from "react";
// import { AiOutlinePlus } from "react-icons/ai";
import ContentGrid from "../components/shared/ContentGrid";
import CardSuply from "../components/CardSuply/CardSuply";
import ContentLeft from "../components/shared/ContentLeft";
// import ButtonIcon from "../components/shared/ButtonIcon";
import Search from "../components/shared/Search";
import * as serviceProduct from "../services/product";
import ButtonText from "../components/shared/ButtonText";

function Suply() {
  const [tab] = useState(1);
  const [suply, setSuply] = useState([]);
  const handleCaptureDataPieces = ({ id, piezas }) => {
    console.log("suplyId", id, piezas);
  };

  const handleSearch = (e) => {
    console.log(e);
  };

  const getProducts = async () => {
    const data = await serviceProduct.getProducts();
    setSuply(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(suply);
  // 1- filtrar comparando el minimo de piezas con las piezas actuales
  // 2- crear un estado donde tendre mis productos filtrados
  // 3- renderizar las cards en el estado que tiene el filtrado
  // * usar metodo filter *

  return (
    <ContentGrid
      gridCol="grid-cols-1 md:grid-cols-6"
      gridRow="grid-rows-1 md:grid-rows-1"
    >
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } grid col-span-1 md:col-span-6 lg:col-span-6 row-span-4`}
      >
        <ContentLeft
          title="Surtir"
          element={
            <div>
              <Search handleSearch={handleSearch} />
            </div>
            /* <div>
            <ButtonIcon icon={<AiOutlinePlus size={22} />} />
          </div> */
          }
        >
          {suply.map((product) => (
            <div
              key={product.idProducto}
              className="grid grid-col-1 sm:grid-col-2 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 h-24 m-2"
            >
              <CardSuply
                productSuply={product}
                handleCapture={handleCaptureDataPieces}
              />
            </div>
          ))}
          <div className="flex w-40 justify-self-end m-5 col-span-1 sm:col-span-2">
            <ButtonText>Surtir</ButtonText>
          </div>
        </ContentLeft>
      </div>
    </ContentGrid>
  );
}

export default Suply;
