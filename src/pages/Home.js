import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 w-full h-full grid grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-4">
      <div className="grid col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 border">
        <p>favoritos</p>
      </div>
      <div className="grid col-span-1 row-span-1 sm:row-span-4 border">
        <p>Carrito</p>
      </div>
      <div className="hidden sm:grid sm:col-span-2 sm:row-span-2 border">
        <p>Tickets</p>
      </div>
    </div>
  );
}

export default Home;
