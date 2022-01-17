import Button from "components/shared/Button";
import React from "react";
import { BiCog } from "react-icons/bi";
import "./App.css";

function App() {
  const help = (msj) => {
    console.log(msj);
  };

  return (
    <div className="App">
      <header className="App-header bg-gray-0 text-gray-200">
        <BiCog size={150} className="App-logo fill-gray-200" />
        <h1 className="text-3xl font-bold text-gray-200 montse-rg">
          <span className="text-pink-0 fredoka">Tivan</span> en proceso!
        </h1>
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
        <p>Botones icono</p>
        <div className="flex">
          <Button
            circle={true}
            hover={true}
            icon={<BiCog size={20} />}
            click={() => help("boton icono")}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
