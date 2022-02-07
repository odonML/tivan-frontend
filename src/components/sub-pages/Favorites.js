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
      <div className="h-max-[10%] flex justify-between">
        <p>Favoritos</p>
        <div className="w-32 sm:w-60 sm:ml-2">
          <Search handleSearch={handleSearch} />
        </div>
      </div>
      <div className="w-full h-[87%] grid grid-cols-1 sm:grid-cols-3 gap-1 overflow-y-scroll">
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
        <div className="col-span-1 h-24">
          <CardProduct />
        </div>
      </div>
    </div>
  );
}

export default Favorites;
