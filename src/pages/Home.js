import { message } from "antd";
import CardCarrito from "components/CardCarrito/CardCarrito";
import CardProduct from "components/CardProduct/CardProduct";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import ControlsShopping from "components/shared/ControlsShopping";
import DataTicket from "components/shared/DataTicket";
import Modal from "components/shared/Modal";
import Scan from "components/shared/Scan";
import Search from "components/shared/Search";
import React, { useEffect, useState } from "react";
import * as serviceProduct from "../services/product";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [carrito, setCarrito] = useState({});
  const [totalCarrito, setTotalCarrito] = useState({});
  const [objListShoppingCar, setObjListShoppingCar] = useState({});
  const [tab, setTab] = useState(1);
  const [metodoPago, setMetodoPago] = useState("");
  const [getError, setGetError] = useState(false);
  const [visibleModalScan, setVisibleModalScan] = useState(false);
  const [visibleModalOfCambio, setVisibleModalOfCambio] = useState(false);
  const [pago, setPago] = useState(0);

  const getProducts = async () => {
    const allData = await serviceProduct.getProducts();
    if (allData === undefined) {
      setGetError(true);
      return;
    }
    const data = allData.filter((product) => product.eliminar === 0);
    const favoritos = data.filter((product) => product.favorito === 1);
    if (favoritos.length === 0) setProducts(data);
    else {
      setSearchResult(data);
      setProducts(favoritos);
    }
  };

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

  const deleteProductOfCar = (id) => {
    const newCarrito = { ...carrito };
    const newTotalCarrito = { ...totalCarrito };
    if (delete newCarrito[id] && delete newTotalCarrito[id]) {
      message.error("Producto eliminado del carrito");
      setCarrito(newCarrito);
      setTotalCarrito(newTotalCarrito);
    }
  };

  const addProductToCar = (id, product) => {
    if (id in carrito) {
      message.error("El producto ya esta el agregado");
      // hacer la suma en las piezas
    }
    const objAddToCarrito = {
      ...carrito,
      [id]: {
        ...product,
        amountProductByCar: 1,
        totalPricesByProduct: product.precio,
      },
    };
    setCarrito(objAddToCarrito);
    message.success("El producto fue agregado al carrido");
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
        <div key={product.idProducto} className="col-span-1 h-24 ">
          <CardCarrito
            product={product}
            actionDeleteOfCar={() => deleteProductOfCar(product.idProducto)}
            handleCapture={handleCaptureDataPieces}
          />
        </div>
      ))
      .reverse();

  const postTicket = async (list) => {
    // const ticketPost = await serviceTicket.postTicket(list);
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
    if (metodoPago === "") message.warning("Selecciona un metodo de pago!");
    if (productos.length !== 0) {
      const listShoppingCar = {
        method: metodoPago,
        costoTotal: total,
        products: productos,
      };
      setObjListShoppingCar(listShoppingCar);
      if (metodoPago === "Efectivo") {
        setVisibleModalOfCambio(true);
      } else {
        // hacer post -------------------------------------------------------------------------------------
        postTicket(listShoppingCar);
      }
    } else message.error("No hay productos en el carrito");
  };

  const handleSearch = (valueSearch) => {
    if (valueSearch === "") getProducts();
    const valueSearchLowerCase = valueSearch.toLowerCase();
    const productsSearch = searchResult.filter(
      (product) =>
        product.comun.toLowerCase().includes(valueSearchLowerCase) ||
        product.clave.toLowerCase().includes(valueSearchLowerCase)
    );
    setProducts(productsSearch);
  };

  const getCodeDetected = async (barCode) => {
    const [productDetected] = await searchResult.filter(
      (product) => product.codigoBarras === Number(barCode)
    );
    const { idProducto } = productDetected;

    await addProductToCar(idProducto, productDetected);
    message.success("Producto Agregado al carrito!");
    setVisibleModalScan(false);
    setVisibleModalScan(true);
  };

  const allProductsToObj = (arrayToObj) => {
    const objAllProducts = arrayToObj.reduce((objAcumulador, product) => {
      const id = product.idProducto;
      return { ...objAcumulador, [id]: product };
    }, {});
    return objAllProducts;
  };

  const addProductToFavorites = async (id) => {
    const allProductsInObj = allProductsToObj(products);
    const numberFav = allProductsInObj[id].favorito;
    let fav;
    if (numberFav === 0) fav = false;
    else fav = true;
    await serviceProduct.addProductToFavorites(id, !fav);
    if (fav) message.error("El producto se elimino de favoritos");
    else message.success("El producto se agrego a favoritos");
    getProducts();
  };

  const handlePago = (e) => {
    const pagoInputValue = e.target.value;
    setPago(pagoInputValue);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    showProductsListCarrito();
  }, [carrito]);

  return (
    <ContentGrid>
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } col-span-6 lg:grid  row-span-1 lg:col-span-4 md:row-span-4`}
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
              className="col-span-1 md:col-span-2 lg:col-span-1 h-28"
            >
              <CardProduct
                product={product}
                addFavorite={() => addProductToFavorites(product.idProducto)}
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
              actionScan={() => setVisibleModalScan(true)}
            ></ControlsShopping>
          }
        >
          {/* volver el alerta un componente con el setTimeout */}
          {showProductsListCarrito()}
          {visibleModalScan ? (
            <Modal closeModal={() => setVisibleModalScan(false)}>
              <Scan getCodeDetected={getCodeDetected} />
            </Modal>
          ) : (
            ""
          )}
          {visibleModalOfCambio ? (
            <Modal
              closeModal={() => {
                setVisibleModalOfCambio(false);
                setPago(0);
              }}
            >
              <div className="w-full h-full flex flex-col text-sm">
                <DataTicket
                  label="Tipo de pago:"
                  result={objListShoppingCar.method}
                />
                <DataTicket
                  label="Total:"
                  result={objListShoppingCar.costoTotal}
                />
                <DataTicket
                  label="Pago:"
                  result={
                    <input
                      type="number"
                      className="w-20 text-sm p-1 border rounded-sm text-purple-0 outline-none"
                      value={pago}
                      onChange={handlePago}
                    />
                  }
                />
              </div>
            </Modal>
          ) : (
            ""
          )}
        </ContentRight>
      </div>
      {/* Hacer el tab en componentes */}

      <div className=" absolute flex items-center justify-center bottom-0 w-full h-[5%] py-4 lg:hidden">
        <div className="flex w-2/3 md:h-[90%] text-white text-base">
          <div className="w-full">
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
