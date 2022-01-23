import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Select({ options, msj, fontSize = "sm" }) {
  return (
    <div className={` custom-select w-full h-auto`}>
      <select
        name="select"
        className={`w-full appearance-none border px-3 pr-10 border-pink-0 bg-gray-0 focus:bg-gray-0 focus:outline-none rounded-full ${
          fontSize === "lg"
            ? "text-lg"
            : fontSize === "md"
            ? "text-base"
            : "text-sm"
        }`}
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
      <div className="select-arrow absolute top-0 right-0 flex items-center w-10 h-full pl-2 center pointer-events-none	">
        <IoIosArrowDown size={18} />
      </div>
    </div>
  );
}

export default Select;
