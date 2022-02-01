import ButtonCheckbox from "components/shared/ButtonCheckbox";
import ButtonIcon from "components/shared/ButtonIcon";
import ButtonText from "components/shared/ButtonText";
import Image from "components/shared/Image";
import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import Select from "components/shared/Select";
import TitleSection from "components/shared/TitleSection";
import React from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineDropbox,
  AiOutlineStar,
} from "react-icons/ai";
import { BiCog, BiHomeAlt, BiSearchAlt2 } from "react-icons/bi";
import { BsUpcScan } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import "./App.css";
import CardDescription from "./components/shared/CardDescription";
import CardTitle from "./components/shared/CardTitle";
import ControlsShopping from "./components/shared/ControlsShopping";
import Sidebar from "./components/shared/Sidebar";

function App() {
  const help = (msj) => {
    console.log(msj);
  };

  const op = [
    {
      id: 1,
      value: "op1",
    },
    {
      id: 2,
      value: "op2",
    },
  ];
  const op2 = [
    {
      id: 1,
      value: "a",
    },
    {
      id: 2,
      value: "b",
    },
  ];

  const buttonsOfPages = [
    {
      id: "01",
      text: "Suply",
      icon: <BiSearchAlt2 size={20} />,
      action: () => console.log("Suply"),
    },
    {
      id: "02",
      text: "Ventas",
      icon: <RiMoneyDollarCircleLine size={20} />,
      action: () => console.log("Ventas"),
    },
    {
      id: "03",
      text: "Inventario",
      icon: <AiOutlineDropbox size={20} />,
      action: () => console.log("Inventario"),
    },
    {
      id: "04",
      text: "Carrito",
      icon: <FaShoppingCart size={20} />,
      action: () => console.log("Carrito"),
    },
    {
      id: "05",
      text: "Faboritos",
      icon: <AiFillHeart size={20} />,
      action: () => console.log("Favoritos"),
    },
  ];
  return (
    <div className="App">
      <header className="App-header bg-gray-3 text-gray-1 py-5">
        <BiCog size={150} className="App-logo fill-gray-200" />
        <h1 className="text-3xl font-bold montse-rg">
          <span className="text-pink-0 fredoka">Tivan</span> en proceso!
        </h1>
        -----------------------------------------
        <p>Fonts</p>
        <div className="w-full">
          <p className="w-full text-sm">
            Las funetes de tipografia estan en el proyecto y estan en una custom
            class de tailwind y las puedes aplicar en el className de algun
            elemento, y las custom class son fredoka, montse-rg y montse-md.
          </p>
        </div>
        -----------------------------------------
        <p>Botones texto</p>
        <div className="w-full flex flex-wrap md:flex-nowrap">
          <ButtonText click={() => console.log("boton default")}>
            Primary (default)
          </ButtonText>
          <ButtonText
            bgColor="bg-pink-0"
            fontSize="text-lg"
            click={() => console.log("boton")}
          >
            No Primary
          </ButtonText>
          <ButtonText
            id="btnIcon"
            bgColor="bg-pink-0"
            fontSize="text-2xl"
            flexDirection="flex-row-reverse"
            click={(e) => console.log("boton + icono", e)}
            icon={<BiCog />}
          >
            Buton
          </ButtonText>
        </div>
        -----------------------------------------
        <p>Botones icono</p>
        <div className="flex">
          <ButtonIcon
            icon={<BiHomeAlt size={20} />}
            click={() => console.log("hola")}
          />
          <ButtonIcon
            bgColor="bg-yellow-0"
            txColor="text-purple-0"
            icon={<FaShoppingCart size={20} />}
            click={() => help("boton icono")}
          />
        </div>
        -----------------------------------------
        <p>Checkbox</p>
        <ButtonCheckbox
          iconActive={<AiFillStar size={20} />}
          iconNoActice={<AiOutlineStar size={20} />}
          click={(e) => console.log("Value", e)}
        />
        -----------------------------------------
        <p>Logo</p>
        <div>
          <Logo>Tivan</Logo>
        </div>
        -----------------------------------------
        <p>Select</p>
        <div className="w-auto">
          <Select options={op} fontSize="md" msj="Selecciona opcion" />
        </div>
        <div className="w-30">
          <Select
            options={op2}
            msj="selecciona letra"
            fontSize="lg"
            full={false}
          />
        </div>
        -----------------------------------------
        <p>Titulo de la seccion + boton</p>
        <TitleSection text="Suply" locked={true} />
        <TitleSection text="Ventas" locked={false} />
        -----------------------------------------
        <p>Imagen</p>
        <div className="w-10">
          <Image
            img="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            text="cara"
          />
        </div>
        -----------------------------------------
        <p>Titulo</p>
        <CardTitle text="titulo card" />
        -----------------------------------------
        <p>Descripcion</p>
        <CardDescription text="descripcion de la card o el producto xD" />
        -----------------------------------------
        <p>Navbar</p>
        <div className="w-full">
          <Navbar>
            <Logo>Tivan</Logo>
            <div className="block md:hidden">
              <ButtonIcon icon={<BiSearchAlt2 />} />
            </div>
            <div className="hidden md:block">
              <input
                className="rounded-full px-3"
                type="text"
                placeholder="Search..."
              />
            </div>
          </Navbar>
        </div>
        -----------------------------------------
        <p>Sidebar</p>
        <div className="w-full md:h-screen">
          <Sidebar buttonsOfPages={buttonsOfPages}>
            <div className="hidden md:flex md:flex-col md:items-center md:gap-2">
              <ButtonIcon icon={<BsUpcScan size={20} />} />
              <ButtonIcon icon={<BiSearchAlt2 size={20} />} />
            </div>
          </Sidebar>
        </div>
        ----------------------------------------
        <p>controls shopping cart</p>
        <div className="w-80">
          <ControlsShopping
            actionBtnLeft={() => console.log("scaner")}
            actionBtnRight={() => console.log("cobro")}
            selectAction={(e) => console.log("seleccion: ", e.target.value)}
            selectOptions={op2}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
