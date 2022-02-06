import ButtonText from "components/shared/ButtonText";
import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm";

function FormProduct({ dataProduct = "hola", click }) {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => click(data);
  // const getErrors = (error) => `error ${error}`;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <InputForm
          type="text"
          label="Nombre"
          nameInput="nombre"
          register={register}
          value={dataProduct.name || ""}
          validations={{ required: true, min: 2 }}
        />

        <InputForm
          type="text"
          label="Clave"
          nameInput="keyName"
          register={register}
          value={dataProduct.keyName || ""}
          validations={{ required: true, min: 2 }}
        />
      </div>
      <ButtonText type={false}>Enviar</ButtonText>
    </form>
  );
}

export default FormProduct;
