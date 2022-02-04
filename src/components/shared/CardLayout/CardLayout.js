import React from "react";

function CardLayout() {
  return (
    <div>
      <a
        href="./CardLayout.js"
        className="flex bg-white rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <div className="w-20">
          <p>imagen</p>
        </div>
        <div className="flex-col p-2 leading-normal grid justify-items-start">
          <p>contenido</p>
        </div>
      </a>
      <div className="flex relative bottom-8 px-2 justify-between">
        <p>boton</p>
      </div>
    </div>
  );
}

export default CardLayout;
