import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function MinusPlusInput({ callback, id, value = 1, minValue = 1 }) {
  const [piezas, setPiezas] = useState(value);

  const handlePlus = () => {
    setPiezas(piezas + 1);
  };
  const handleMinus = () => {
    if (piezas > minValue) {
      setPiezas(piezas - 1);
    }
  };

  const handleWrite = (e) => {
    const data = Number(e.target.value);
    if (!isNaN(data) && data >= minValue) setPiezas(data);
  };

  useEffect(() => {
    callback({ piezas, id });
  }, [piezas]);

  return (
    <div className="h-full flex rounded-full text-sm md:text-lg lg:text-xl">
      <button
        className="w-1/4 h-full flex items-center justify-center  rounded-l-full bg-purple-0 text-white"
        type="button"
        onClick={() => handlePlus()}
      >
        <AiOutlinePlus />
      </button>
      <input
        className="w-2/4 h-full px-1 flex items-center justify-center text-sm appearance-none outline-none"
        type="text"
        value={piezas}
        onChange={handleWrite}
      />
      <button
        className="w-1/4 h-full flex items-center justify-center  rounded-r-full bg-purple-0 text-white"
        type="button"
        onClick={() => handleMinus()}
      >
        <AiOutlineMinus />
      </button>
    </div>
  );
}

export default MinusPlusInput;
