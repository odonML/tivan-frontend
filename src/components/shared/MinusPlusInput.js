import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function MinusPlusInput({ callbackPlus, callbackMinus, value = 0 }) {
  // const [piezas, setPiezas] = useState(value);

  useEffect(() => {
    // Peticion a la api
    // console.log(typeof piezas);
  }, []);

  const handlePlus = () => {
    callbackPlus();
  };
  const handleMinus = () => {
    callbackMinus();
    // if (piezas > 0) {
    //   setPiezas(piezas - 1);
    // }
  };
  // const handleWrite = (e) => {
  //   const data = Number(e.target.value);
  //   if (!isNaN(data)) setPiezas(data);
  // };
  return (
    <div className="h-full flex rounded-full text-sm md:text-lg lg:text-xl">
      <button
        className="w-1/4 h-full flex items-center justify-center  rounded-l-full bg-purple-0 text-white"
        type="button"
        onClick={handlePlus}
      >
        <AiOutlinePlus />
      </button>
      <input
        className="w-2/4 h-full px-1 flex items-center justify-center text-sm appearance-none outline-none"
        type="text"
        value={value}
        // onChange={handleWrite}
      />
      <button
        className="w-1/4 h-full flex items-center justify-center  rounded-r-full bg-purple-0 text-white"
        type="button"
        onClick={handleMinus}
      >
        <AiOutlineMinus />
      </button>
    </div>
  );
}

export default MinusPlusInput;
