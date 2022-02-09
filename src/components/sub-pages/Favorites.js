import CardProduct from "components/CardProduct/CardProduct";
import Content from "components/shared/Content";
import React, { useState } from "react";
import ContentTitle from "../shared/ContentTitle";
import Search from "../shared/Search";

function Favorites() {
  const [palabra, setPalabra] = useState("");
  const handleSearch = (e) => {
    console.log(palabra);
    setPalabra(e);
  };
  return (
    <Content>
      <ContentTitle>
        <p>Favoritos</p>
        <div className="w-full ml-2 m-1 sm:m-0 sm:w-60">
          <Search handleSearch={handleSearch} />
        </div>
      </ContentTitle>
      {/* <ContentGrid
        height="h-[92%]"
        gridCol="grid-cols-1 sm:grid-cols-3"
        extra="py-1 overflow-y-scroll custom-scrolls"
      ></ContentGrid> */}
      <div className="w-full h-[89%] md:h-[92%] py-1 px-2 grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-y-scroll custom-scroll">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 h-36 sm:h-24">
          <CardProduct />
        </div>
      </div>
    </Content>
  );
}

export default Favorites;
