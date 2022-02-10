import ButtonText from "components/shared/ButtonText";
import React from "react";
import { useForm } from "react-hook-form";
import InputForm from "./InputForm";

function FormProduct({ dataProduct = {}, click }) {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => click(data);
  // const getErrors = (error) => `error ${error}`;
  return (
    <form className="w-full h-full border" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="col-span-2 row-span-3"></div>
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Nombre"
            nameInput="nombre"
            register={register}
            value={dataProduct.name || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            validations={{ required: true, min: 2 }}
          />
        </div>
      </div>
      <ButtonText type={false}>Enviar</ButtonText>
    </form>
  );
}

export default FormProduct;
