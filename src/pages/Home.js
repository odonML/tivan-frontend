import React, { useState } from "react";
import Favorites from "../components/sub-pages/Favorites";

function Home() {
  const [tab, setTab] = useState(1);

  return (
    <div className="relative bg-gray-3 w-full h-full grid gap-1 grid-cols-1 grid-rows-1 md:grid-cols-6 md:grid-rows-4">
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } sm:grid col-span-1 row-span-1 md:col-span-4 md:row-span-4`}
      >
        <Favorites />
      </div>
      <div
        className={`${
          tab === 2 ? "grid col-span-2 row-span-1" : "hidden"
        } md:grid md:col-span-2 md:row-span-4`}
      >
        <p>Carrito</p>
      </div>
      {/* <div className="hidden md:grid sm:col-span-2 md:row-span-2 ">
        <p>Tickets</p>
      </div> */}
      <div className="absolute bottom-0 w-full h-7 px-1 flex justify-center md:hidden">
        <div className="flex w-2/3 text-white text-sm">
          <div className="w-1/2">
            <button
              type="button"
              className={`w-full rounded-l-full ${
                tab === 1 ? "bg-purple-0" : "bg-pink-0"
              }`}
              onClick={() => setTab(1)}
            >
              Favoritos
            </button>
          </div>
          <div className="w-1/2">
            <button
              type="button"
              className={`w-full rounded-r-full ${
                tab === 2 ? "bg-purple-0" : "bg-pink-0"
              }`}
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
