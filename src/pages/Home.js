import { message } from "antd";
import CardCarrito from "components/CardCarrito/CardCarrito";
import CardProduct from "components/CardProduct/CardProduct";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import ControlsShopping from "components/shared/ControlsShopping";
import Modal from "components/shared/Modal";
import Scan from "components/shared/Scan";
import Search from "components/shared/Search";
import React, { useEffect, useState } from "react";
import * as serviceProduct from "../services/product";

function Home() {
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [carrito, setCarrito] = useState({
    // 1302: {
    //   amountProductByCar: 1,
    //   cantidad: 2,
    //   cantidadMinima: 2,
    //   clave: "#a",
    //   codigoBarras: 2,
    //   comun: "Leche delite",
    //   descripcion: "a",
    //   eliminar: 0,
    //   favorito: 1,
    //   fechaCreacion: null,
    //   fechaModificacion: "2022-02-22",
    //   idProducto: 1302,
    //   image: null,
    //   precio: 2,
    //   totalPricesByProduct: 2,
    //   userCreacion: null,
    // },
  });
  const [totalCarrito, setTotalCarrito] = useState({});

  const [tab, setTab] = useState(1);
  const [metodoPago, setMetodoPago] = useState("");
  const [getError, setGetError] = useState(false);
  const [productDuplicado, setProductDuplicado] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);

  const showModal = () => {
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

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
      setCarrito(newCarrito);
      setTotalCarrito(newTotalCarrito);
    }
  };

  const addProductToCar = (id, product) => {
    if (id in carrito) {
      // message.error("El producto ya esta el agregado");
      // hacer la suma en las piezas
    }
    console.log("before to car", carrito);
    const objAddToCarrito = {
      ...carrito,
      [id]: {
        ...product,
        amountProductByCar: 1,
        totalPricesByProduct: product.precio,
      },
    };
    console.log("after carrito", objAddToCarrito);
    setCarrito(objAddToCarrito);
  };

  const selectMethodPaymend = (methodPaymend) => {
    setMetodoPago(methodPaymend);
  };

  const getCostoTotal = () =>
    Object.values(totalCarrito).reduce(
      (acumulador, valor) => acumulador + valor,
      0
    );

  const showProductsListCarrito = () => {
    console.log("showProducts: ", carrito);
    return Object.values(carrito)
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
    // console.log("codigo detectador", barCode);
    const [productDetected] = await searchResult.filter(
      (product) => product.codigoBarras === Number(barCode)
    );
    const { idProducto } = productDetected;
    console.log("add carrito");

    await addProductToCar(idProducto, productDetected);
    message.success("Producto Agregado al carrito!");
    setVisibleModal(false);
    setVisibleModal(true);
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
    getProducts();
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // console.log("carrito ---- ", carrito);
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
              actionScan={showModal}
            ></ControlsShopping>
          }
        >
          {/* volver el alerta un componente con el setTimeout */}
          {showProductsListCarrito()}
          {visibleModal ? (
            <Modal closeModal={closeModal}>
              {/* {seniorSinto ? <Scan getCodeDetected={getCodeDetected} /> : ""} */}
              <Scan getCodeDetected={getCodeDetected} />
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
