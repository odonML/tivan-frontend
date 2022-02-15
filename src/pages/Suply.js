import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ContentGrid from "../components/shared/ContentGrid";
import CardSuply from "../components/CardSuply/CardSuply";
import ContentLeft from "../components/shared/ContentLeft";
import ButtonIcon from "../components/shared/ButtonIcon";

function Suply() {
  const [tab] = useState(1);
  const products = [
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
    {
      imag: "https://minisupersofy.webnode.es/_files/system_preview_detail_200000017-b9012b9fd7/Bolsa-Sabritas-Original.jpg",
      name: "Sabritas Original 45g",
      description: "botana de papa con sal",
      tag: "#SASAL",
    },
  ];

  return (
    <ContentGrid
      gridCol="grid-cols-1 md:grid-cols-6"
      gridRow="grid-rows-1 md:grid-rows-1"
    >
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } grid col-span-1 md:col-span-6 lg:col-span-6 row-span-4`}
      >
        <ContentLeft
          title="Suply"
          element={
            <div>
              <ButtonIcon icon={<AiOutlinePlus size={22} />} />
            </div>
          }
        >
          {products.map((product) => (
            <div className="grid gap-3 grid-col-1 sm:grid-col-2 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 h-24">
              <CardSuply
                img={product.imag}
                nameProduct={product.name}
                descriptionProduct={product.description}
                tagProduct={product.tag}
              />
            </div>
          ))}
        </ContentLeft>
      </div>
    </ContentGrid>
  );
}

export default Suply;
