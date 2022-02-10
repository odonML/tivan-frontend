import ButtonIcon from "components/shared/ButtonIcon";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Search({ handleSearch }) {
  const [search, setSearch] = useState("");

  const handleWrite = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const getSearch = () => {
    handleSearch(search);
  };

  const enterKeyDown = (e) => {
    if (e.key === "Enter") getSearch();
  };

  return (
    <div className="relative w-full h-full flex items-center">
      <input
        type="text"
        className="w-full h-[90%] px-3 pr-6  rounded-full bg-white outline  outline-1 outline-pink-0 "
        value={search}
        onChange={handleWrite}
        onKeyDown={(e) => enterKeyDown(e)}
      />
      <div className="absolute top-0 right-0 ">
        <ButtonIcon
          bgColor=""
          txColor="text-purple-0"
          icon={<AiOutlineSearch size={16} />}
          click={getSearch}
        />
      </div>
    </div>
  );
}

export default Search;
