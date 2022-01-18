import Button from "components/shared/Button";
import ButtonIcon from "components/shared/ButtonIcon";
import Logo from "components/shared/Logo";
import Select from "components/shared/Select";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";

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
      <header className="App-header bg-gray-0 text-gray-200 py-5">
        <BiCog size={150} className="App-logo fill-gray-200" />
        <h1 className="text-3xl font-bold montse-rg">
          <span className="text-pink-0 fredoka">Tivan</span> en proceso!
        </h1>
        -----------------------------------------
        <p>Fonts</p>
        <p className="w-96 text-sm">
          Las funetes de tipografia estan en el proyecto y estan en una custom
          class de tailwind y las puedes aplicar en el className de algun
          elemento, y las custom class son fredoka, montse-rg y montse-md.
        </p>
        -----------------------------------------
        <p>Botones texto</p>
        <div className="flex w-full">
          <Button>Primary (default)</Button>
          <Button primary={false} textSize="md">
            No Primary
          </Button>
          <Button
            primary={false}
            textSize="lg"
            click={() => help("boton texto")}
            icon={<BiCog />}
          >
            Con icono
          </Button>
        </div>
        -----------------------------------------
        <p>Botones icono</p>
        <div className="flex">
          <ButtonIcon
            icon={<AiFillStar size={20} />}
            click={() => help("boton icono")}
          />
          <ButtonIcon
            favorite={true}
            icon={<AiFillStar size={20} />}
            click={() => help("boton icono")}
          />
          <ButtonIcon
            sales={true}
            icon={<FaShoppingCart size={20} />}
            click={() => help("boton icono")}
          />
        </div>
        -----------------------------------------
        <p>Logo</p>
        <div>
          <Logo>Tivan</Logo>
        </div>
        -----------------------------------------
        <p>Select</p>
        <div className="w-30">
          <Select options={op} msj="selecciona opcion" />
          <Select
            options={op2}
            msj="selecciona letra"
            fontSize="lg"
            full={false}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
