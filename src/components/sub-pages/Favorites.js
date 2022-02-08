import CardProduct from "components/CardProduct/CardProduct";
import React, { useState } from "react";
import Search from "../shared/Search";

function Favorites() {
  const [palabra, setPalabra] = useState("");
  const handleSearch = (e) => {
    console.log(palabra);
    setPalabra(e);
  };
  return (
    <div className="w-full h-[100%] sm:p-1 bg-white sm:rounded-lg overflow-hidden">
      <div className="h-max-[10%] px-2 flex items-center justify-between">
        <p>Favoritos</p>
        <div className="w-full ml-2 m-1 sm:w-60">
          <Search handleSearch={handleSearch} />
        </div>
      </div>
      <div className="w-full h-[92%] py-1 grid grid-cols-1 sm:grid-cols-3 gap-1 overflow-y-scroll custom-scroll">
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
