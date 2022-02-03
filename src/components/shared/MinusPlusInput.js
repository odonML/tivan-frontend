import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function MinusPlusInput({ value = 0, observerValue = null }) {
  const [piezas, setPiezas] = useState(value);

  useEffect(() => {
    observerValue(piezas);
  }, [piezas]);

  const handlePlus = () => {
    setPiezas(piezas + 1);
  };
  const handleMinus = () => {
    if (piezas > 0) {
      setPiezas(piezas - 1);
    }
  };
  const handleWrite = (e) => {
    const data = Number(e.target.value);
    setPiezas(data);
  };
  return (
    <div className="flex rounded-full text-sm md:text-lg lg:text-xl">
      <div className="flex items-center justify-center ">
        <button
          className="w-full h-full px-2 rounded-l-full bg-purple-0 text-white"
          type="button"
          onClick={handlePlus}
        >
          <AiOutlinePlus />
        </button>
      </div>
      <input
        className="w-14 px-1 outline-none align-middle"
        type="number"
        value={piezas}
        onChange={handleWrite}
      />
      <div className="flex items-center justify-center ">
        <button
          className="w-full h-full px-2 rounded-r-full bg-purple-0 text-white"
          type="button"
          onClick={handleMinus}
        >
          <AiOutlineMinus />
        </button>
      </div>
    </div>
  );
}

export default MinusPlusInput;
