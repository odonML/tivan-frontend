import React from "react";

function Favorites() {
  return (
    <div className="relative w-full h-full grid grid-cols-1 sm:grid-cols-3">
      <div className="h-10 col-span-3 border">
        <p>Titulo</p>
      </div>
      <div className="h-full col-span-2 border">
        <div className="col-span-12 border">
          <p>Favoritos</p>
        </div>
        <div className="hidden col-span-12 border">
          <p>Tickets</p>
        </div>
      </div>
      <div className="hidden col-span-1 border">
        <p>Carrito</p>
      </div>
    </div>
  );
}

export default Favorites;
