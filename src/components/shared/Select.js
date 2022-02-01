import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Select({
  id = "",
  selectName = "select",
  options = [],
  msj = "",
  action = null,
}) {
  const handleChange = (e) => {
    if (action != null) action(e);
  };
  return (
    <div className={` w-full relative flex items-center`}>
      <select
        id={id}
        name={selectName}
        className={`w-full appearance-none border border-purple-1 px-3 pr-10 bg-gray-3 focus:bg-gray-3 focus:outline-none rounded-full text-base md:text-lg lg:text-xl `}
        defaultValue={0}
        onChange={(e) => handleChange(e)}
      >
        <option value={0} disabled>
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
