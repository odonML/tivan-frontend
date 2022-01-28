import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Select({ options, msj, fontSize = "text-sm" }) {
  return (
    <div className={` w-full relative flex items-center`}>
      <select
        name="select"
        className={`w-full appearance-none border px-3 pr-10 border-pink-0 bg-gray-3 focus:bg-gray-3 focus:outline-none rounded-full ${fontSize}`}
        defaultValue={0}
      >
        <option value={0} selected disabled>
          {msj}
        </option>
        {options.map((item) => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
      <div className="arrow-select">
        <IoIosArrowDown size={18} />
      </div>
    </div>
  );
}

export default Select;
