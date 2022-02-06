import ButtonText from "components/shared/ButtonText";
import Modal from "components/shared/Modal";
import React, { useState } from "react";
import { BsUpcScan } from "react-icons/bs";

function Favorites() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full h-full grid grid-cols-1 sm:grid-cols-3">
      <div className="h-10 col-span-3 border">
        <p>Titulo</p>
        <div className="w-20">
          <ButtonText click={() => setShowModal(!showModal)}>Hola</ButtonText>
        </div>
        {showModal ? (
          <Modal
            icon={<BsUpcScan size={30} />}
            alignItemsModal="items-center"
            justifyContentModal="justify-end"
            closeModal={() => setShowModal(false)}
          >
            <div className="text-center">
              <p className="text-xl">Emergencia</p>
              <p>Ocurrio un error al realizar la operacion</p>
            </div>
            <div className="flex justify-between w-full mt-4">
              <div>
                <ButtonText>Aceptar</ButtonText>
              </div>
              <div>
                <ButtonText
                  click={() => setShowModal(false)}
                  bgColor="bg-pink-0"
                >
                  Cancelar
                </ButtonText>
              </div>
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
      <div className="h-full col-span-2 border">
        <div className="col-span-12 border">
          <p>Favoritos</p>
        </div>
        <div className="col-span-12 border">
          <p>Tickets</p>
        </div>
      </div>
      <div className="col-span-1 border">
        <p>Carrito</p>
      </div>
    </div>
  );
}

export default Favorites;
