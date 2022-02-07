import React, { useState } from "react";
import Favorites from "../components/sub-pages/Favorites";

function Home() {
  const [tab, setTab] = useState(1);

  return (
    <div className="relative bg-gray-3 w-full h-full grid gap-1 grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-4">
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } sm:grid col-span-1 row-span-1 sm:col-span-2 sm:row-span-2`}
      >
        <Favorites />
      </div>
      <div
        className={`${
          tab === 2 ? "grid col-span-1 row-span-1" : "hidden"
        } sm:grid sm:row-span-4 border`}
      >
        <p>Carrito</p>
      </div>
      <div className="hidden sm:grid sm:col-span-2 sm:row-span-2 ">
        <p>Tickets</p>
      </div>
      <div className="absolute bottom-0 w-full h-7 px-1 flex justify-center sm:hidden">
        <div className="flex w-2/3 text-white text-sm">
          <div className="w-1/2">
            <button
              type="button"
              className="w-full rounded-l-full bg-pink-1"
              onClick={() => setTab(1)}
            >
              Favoritos
            </button>
          </div>
          <div className="w-1/2">
            <button
              type="button"
              className="w-full rounded-r-full bg-pink-1"
              onClick={() => setTab(2)}
            >
              Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
