import React, { useState } from "react";
import ContentGrid from "../components/shared/ContentGrid";
import Favorites from "../components/sub-pages/Favorites";
import ShoppingCar from "../components/sub-pages/ShoppingCar";

function Home() {
  const [tab, setTab] = useState(1);

  return (
    <ContentGrid>
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-4 md:row-span-4`}
      >
        <Favorites />
      </div>
      <div
        className={` ${
          tab === 2 ? "grid col-span-2 row-span-1" : "hidden"
        } md:grid md:col-span-3 lg:col-span-2 md:row-span-4`}
      >
        <ShoppingCar />
      </div>
      {/* <div className="hidden md:grid sm:col-span-2 md:row-span-2 ">
        <p>Tickets</p>
      </div> */}

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
