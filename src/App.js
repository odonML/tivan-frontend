import ButtonCheckbox from "components/shared/ButtonCheckbox";
import ButtonIcon from "components/shared/ButtonIcon";
import ButtonText from "components/shared/ButtonText";
import Image from "components/shared/Image";
import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import Select from "components/shared/Select";
import TitleSection from "components/shared/TitleSection";
import React from "react";
import { BiCog, BiHomeAlt, BiSearchAlt2 } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";
import CardTitle from "./components/shared/CardTitle";

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
          <ButtonText>Primary (default)</ButtonText>
          <ButtonText primary={false} textSize="md">
            No Primary
          </ButtonText>
          <ButtonText
            primary={false}
            textSize="lg"
            click={() => help("boton texto")}
            icon={<BiCog />}
          >
            Con icono
          </ButtonText>
        </div>
        -----------------------------------------
        <p>Botones icono</p>
        <div className="flex">
          <ButtonIcon
            icon={<BiHomeAlt size={20} />}
            click={() => help("boton icono")}
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
        <ButtonCheckbox icon={<FaShoppingCart size={20} />} />
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
        -----------------------------------------
        <p>Navbar</p>
        <div className="w-full">
          <Navbar>
            <Logo>Tivan</Logo>
            <ButtonIcon icon={<BiSearchAlt2 />} />
          </Navbar>
        </div>
      </header>
    </div>
  );
}

export default App;
