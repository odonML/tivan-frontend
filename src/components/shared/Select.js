import React from "react";

function Select({ options, msj, fontSize = "sm", full = true }) {
  return (
    <select
      name="select"
      className={`px-2 border border-pink-0 bg-gray-0 rounded-full focus:bg-gray-0 focus:outline-none 
      ${full ? "w-full" : "w-auto"} ${
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
  );
}

export default Select;
