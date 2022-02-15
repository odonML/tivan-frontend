import { Alert } from "antd";
import CardCarrito from "components/CardCarrito/CardCarrito";
import CardProduct from "components/CardProduct/CardProduct";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import ControlsShopping from "components/shared/ControlsShopping";
import Search from "components/shared/Search";
import React, { useEffect, useState } from "react";
import * as serviceProduct from "../services/product";

function Home() {
  const [tab, setTab] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const [productDuplicado, setProductDuplicado] = useState(false);
  const [products, setProducts] = useState([]);
  
  const handleSearch = (e) => {
    console.log(e);
  };

  const deleteProductOfCar = (id) => {
    const car = carrito.filter((product) => product.idProducto !== id);
    setCarrito(car);
  };

  const addProductToCar = (id, product) => {
    const existProduct = carrito.some((producto) => producto.idProducto === id);
    if (existProduct) {
      setProductDuplicado(true);
      setTimeout(() => {
        setProductDuplicado(false);
      }, 2000);
    } else setCarrito([...carrito, product]);
  };
  // peticion a la API [{}, {}]

  const getProducts = async () => {
    const data = await serviceProduct.getProducts();
    setProducts(data);
    // console.log("data: ", data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ContentGrid>
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } lg:grid col-span-1 row-span-1 lg:col-span-4 md:row-span-4`}
      >
        <ContentLeft
          title="Favoritos"
          element={
            <div className="w-full pl-2 sm:m-0 sm:w-60">
              <Search handleSearch={handleSearch} />
            </div>
          }
        >
          {products.map((product) => (
            <div
              key={product.idProducto}
              className="col-span-1 md:col-span-2 lg:col-span-1 h-auto md:max-h-28 md:h-auto"
            >
              <CardProduct
                product={product}
                addShoppingCard={() =>
                  addProductToCar(product.idProducto, product)
                }
              />
            </div>
          ))}
        </ContentLeft>
      </div>
      <div
        className={` ${
          tab === 2 ? "grid col-span-1 row-span-1" : "hidden"
        } lg:grid md:col-span-3 lg:col-span-2 md:row-span-4`}
      >
        <ContentRight
          title="Carrito"
          controls={<ControlsShopping></ControlsShopping>}
        >
          {productDuplicado ? (
            <Alert message="Success Text" type="success" />
          ) : (
            ""
          )}
          {carrito
            .map((product) => (
              <div
                key={product.idProducto}
                className="col-span-1 h-auto sm:h-20 md:min-h-24 md:max-h-28 md:h-auto"
              >
                <CardCarrito
                  product={product}
                  actionDeleteOfCar={() =>
                    deleteProductOfCar(product.idProducto)
                  }
                />
              </div>
            ))
            .reverse()}
        </ContentRight>
      </div>
      {/* Hacer el tab en componentes */}
      <div className=" absolute left-1/2 bottom-0 w-full h-[5%] py-4 lg:hidden">
        <div className="flex w-2/3 md:h-[90%] text-white text-base">
          <button
            type="button"
            className={`w-full  h-full rounded-l-full ${
              tab === 1 ? "bg-pink-0" : "bg-purple-0"
            }`}
            onClick={() => setTab(1)}
          >
            Favoritos
          </button>

          <div className="w-full">
            <button
              type="button"
              className={`w-full rounded-r-full ${
                tab === 2 ? "bg-pink-0" : "bg-purple-0"
              }`}
              onClick={() => setTab(2)}
            >
              Carrito
            </button>
          </div>
        </div>
      </div>
    </ContentGrid>
  );
}

export default Home;
