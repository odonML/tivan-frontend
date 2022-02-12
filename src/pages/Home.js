import CardCarrito from "components/CardCarrito/CardCarrito";
import CardProduct from "components/CardProduct/CardProduct";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import ControlsShopping from "components/shared/ControlsShopping";
import Search from "components/shared/Search";
import React, { useState } from "react";

function Home() {
  const [tab, setTab] = useState(1);
  const [carrito, setCarrito] = useState([]);
  const [products, setProducts] = useState([
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
  ]);

  console.log(carrito);
  const handleSearch = (e) => {
    console.log(e);
  };
  const deleteProductOfCar = (id) => {
    const car = carrito.filter((product) => product.id !== id);
    setCarrito(car);
  };
  const addProductToCar = (id, product) => {
    const existProduct = carrito.some((producto) => producto.id === id);
    if (!existProduct) setCarrito([...carrito, product]);
  };
  // peticion a la API [{}, {}]

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
              key={product.id}
              className="col-span-1 md:col-span-2 lg:col-span-1 h-24 sm:h-20 md:min-h-24 md:max-h-28 md:h-auto"
            >
              <CardProduct
                product={product}
                addShoppingCard={() => addProductToCar(product.id, product)}
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
          {carrito.map((product) => (
            <div
              key={product.id}
              className="col-span-1 h-24 sm:h-20 md:min-h-24 md:max-h-28 md:h-auto"
            >
              <CardCarrito
                product={product}
                actionDeleteOfCar={() => deleteProductOfCar(product.id)}
              />
            </div>
          ))}
        </ContentRight>
      </div>
      {/* Hacer el tab en componentes */}
      <div className=" absolute border bottom-0 w-full h-[5%] py-1 flex items-center justify-center lg:hidden">
        <div className="flex w-2/3 text-white text-base">
          <div className="w-full">
            <button
              type="button"
              className={`w-full rounded-l-full ${
                tab === 1 ? "bg-pink-0" : "bg-purple-0"
              }`}
              onClick={() => setTab(1)}
            >
              Favoritos
            </button>
          </div>

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
