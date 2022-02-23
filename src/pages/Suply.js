import CardSuply from "components/CardSuply/CardSuply";
import React, { useEffect, useState } from "react";
import { TiCloudStorage } from "react-icons/ti";
import ButtonIcon from "../components/shared/ButtonIcon";
import ContentGrid from "../components/shared/ContentGrid";
import ContentLeft from "../components/shared/ContentLeft";
import Search from "../components/shared/Search";
import * as serviceProduct from "../services/product";

function Suply() {
  const [tab] = useState(1);
  const [suply, setSuply] = useState([]);
  const [searchValueResult, setSearchValueResult] = useState([]);
  const [sendProductsToSuply, setSendProductsToSuply] = useState({});

  const handleCaptureDataPieces = ({ piezas, id }) => {
    const newProductsToSuply = {
      ...sendProductsToSuply,
      [id]: {
        piezas,
        idProducto: id,
      },
    };
    setSendProductsToSuply(newProductsToSuply);
  };

  const getProducts = async () => {
    const allData = await serviceProduct.getProducts();
    const data = allData.filter((product) => product.eliminar === 0);
    const toSuplyProducts = data.filter(
      (product) => product.cantidad <= product.cantidadMinima
    );
    setSearchValueResult(data);
    setSuply(toSuplyProducts);
  };

  const postProductSuply = async (productsSuply) => {
    const response = await serviceProduct.postProductSuply(productsSuply);
    getProducts();
    console.log(response);
  };

  const sendProductsSuply = () => {
    const productsToSuply = { ...sendProductsToSuply };
    const arrayOfProductsForSuply = Object.values(productsToSuply).filter(
      (product) => product.piezas > 0
    );

    const obj = {
      products: arrayOfProductsForSuply,
    };
    postProductSuply(obj);
  };

  const handleSearch = (nombreProducto) => {
    if (nombreProducto === "") getProducts();
    const nombreProductoLowerCase = nombreProducto.toLowerCase();
    const searchValue = searchValueResult.filter(
      (product) =>
        product.comun.toLowerCase().includes(nombreProductoLowerCase) ||
        product.clave.toLowerCase().includes(nombreProductoLowerCase)
    );
    setSuply(searchValue);
  };

  useEffect(() => {
    getProducts();
  }, []);

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
            <div className="flex flex-row gap-4 items-center">
              <ButtonIcon
                click={sendProductsSuply}
                icon={<TiCloudStorage size={22} />}
              />
              <Search handleSearch={handleSearch} />
            </div>
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
        </ContentLeft>
      </div>
    </ContentGrid>
  );
}

export default Suply;
