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
  const [products, setProducts] = useState([]);
  // const [productDuplicado, setProductDuplicado] = useState(false);
  const [carrito, setCarrito] = useState({});
  const [totalCarrito, setTotalCarrito] = useState({});
  const [metodoPago, setMetodoPago] = useState("");
  const [getError, setGetError] = useState(false);

  const handleCaptureDataPieces = ({ piezas, id }) => {
    const newCarrito = { ...carrito };
    const { precio } = newCarrito[id];
    newCarrito[id].amountProductByCar = piezas;
    newCarrito[id].totalPricesByProduct = precio * piezas;
    setCarrito(newCarrito);
    setTotalCarrito({
      ...totalCarrito,
      [id]: newCarrito[id].totalPricesByProduct,
    });
  };

  const handleSearch = (e) => {
    console.log(e);
  };

  const deleteProductOfCar = (id) => {
    const newCarrito = { ...carrito };
    if (delete newCarrito[id]) setCarrito(newCarrito);
  };

  const addProductToCar = (id, product) => {
    setCarrito({
      ...carrito,
      [id]: {
        ...product,
        amountProductByCar: 1,
        totalPricesByProduct: product.precio,
      },
    });
    // const existProduct = carrito.some((producto) => producto.idProducto === id);
    // if (existProduct) {
    //   setProductDuplicado(true);
    //   setTimeout(() => {
    //     setProductDuplicado(false);
    //   }, 2000);
    // } else
  };

  const selectMethodPaymend = (methodPaymend) => {
    setMetodoPago(methodPaymend);
  };

  const getCostoTotal = () =>
    Object.values(totalCarrito).reduce(
      (acumulador, valor) => acumulador + valor,
      0
    );

  const showProductsListCarrito = () =>
    Object.values(carrito)
      .map((product) => (
        <div
          key={product.idProducto}
          className="col-span-1 h-auto sm:h-20 md:min-h-24 md:max-h-28 md:h-auto"
        >
          <CardCarrito
            product={product}
            actionDeleteOfCar={() => deleteProductOfCar(product.idProducto)}
            handleCapture={handleCaptureDataPieces}
          />
        </div>
      ))
      .reverse();

  const getProducts = async () => {
    const data = await serviceProduct.getProducts();
    if (data === undefined) {
      setGetError(true);
      return;
    }
    setProducts(data);
  };

  const paymendListShoppingCar = () => {
    const total = getCostoTotal();

    const productos = Object.values(carrito).map(
      ({ idProducto, amountProductByCar, totalPricesByProduct }) => ({
        idProducto,
        amountProductByCar,
        totalPricesByProduct,
      })
    );
    const objListShoppingCar = {
      method: metodoPago,
      totalPorPagar: total,
      products: productos,
    };
    // hacer post -------------------------------------
    console.log(objListShoppingCar);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    showProductsListCarrito();
  }, [carrito]);

  console.log(carrito);

  return (
    <ContentGrid>
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } lg:grid col-span-6 row-span-1 lg:col-span-4 md:row-span-4`}
      >
        <ContentLeft
          title="Favoritos"
          element={
            <div className="w-full pl-2 sm:m-0 sm:w-60">
              <Search handleSearch={handleSearch} />
            </div>
          }
        >
          {getError ? (
            <div className="text-center">
              <p>lo sentimos o se puedieron cargar los productos</p>
            </div>
          ) : (
            ""
          )}
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
          tab === 2 ? "grid col-span-6 row-span-1" : "hidden"
        } lg:grid md:col-span-3 lg:col-span-2 md:row-span-4`}
      >
        <ContentRight
          title="Carrito"
          controls={
            <ControlsShopping
              actionPaymend={paymendListShoppingCar}
              selectAction={selectMethodPaymend}
              costoTotal={getCostoTotal()}
            ></ControlsShopping>
          }
        >
          {/* volver el alerta un componente con el setTimeout */}
          {/* {productDuplicado ? (
            <Alert message="Success Text" type="success" />
          ) : (
            ""
          )} */}
          {showProductsListCarrito()}
        </ContentRight>
      </div>
      {/* Hacer el tab en componentes */}
      <div className=" absolute flex items-center justify-center bottom-2 w-full h-[5%] lg:hidden">
        <div className="flex px-6 w-full h-full  text-white text-base">
          <div className="w-full h-full border border-pink-0">
            <button
              type="button"
              className={`w-full h-full px-2 flex items-center justify-center rounded-l-full ${
                tab === 1 ? "bg-pink-0" : "bg-purple-0"
              }`}
              onClick={() => setTab(1)}
            >
              <p>Favoritos</p>
            </button>
          </div>
          <div className="w-full h-full border border-pink-0">
            <button
              type="button"
              className={`w-full h-full px-2 flex items-center justify-center  rounded-r-full ${
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
