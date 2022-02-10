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

  const handleSearch = (e) => {
    console.log(e);
  };
  // peticion a la API [{}, {}]

  return (
    <ContentGrid>
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-4 md:row-span-4`}
      >
        <ContentLeft
          title="Favoritos"
          element={
            <div className="w-full pl-2 sm:m-0 sm:w-60">
              <Search handleSearch={handleSearch} />
            </div>
          }
        >
          <div className="col-span-1 md:col-span-2 lg:col-span-1 h-36 sm:h-24">
            <CardProduct />
          </div>
        </ContentLeft>
      </div>
      <div
        className={` ${
          tab === 2 ? "grid col-span-2 row-span-1" : "hidden"
        } md:grid md:col-span-3 lg:col-span-2 md:row-span-4`}
      >
        <ContentRight
          title="Carrito"
          controls={<ControlsShopping></ControlsShopping>}
        >
          <div className="col-span-1 h-24 sm:h-20 md:h-28 lg:h-20">
            <CardCarrito />
          </div>
        </ContentRight>
      </div>
      {/* Hacer el tab en componentes */}
      <div className=" absolute border bottom-0 w-full h-[5%] py-1 flex items-center justify-center md:hidden">
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
