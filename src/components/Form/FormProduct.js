import ButtonText from "components/shared/ButtonText";
import React from "react";
import { useForm } from "react-hook-form";
import InputFile from "./InputFile";
import InputForm from "./InputForm";

function FormProduct({ dataProduct = {}, click }) {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    click(data);
  };
  // const getErrors = (error) => `error ${error}`;
  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* IMAGE */}
        <div className="col-span-2 h-24 py-2 bg-gray-2 rounded-lg">
          <InputFile value="" nameInput="image" register={register} />
        </div>
        {/* Nombre Producto */}
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Nombre"
            nameInput="nombre"
            register={register}
            value={dataProduct.name || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        {/* Nombre clave */}
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Clave"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        {/* Piezas */}
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Piezas"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        {/* Precio */}
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Precio"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        {/* Minimo de piezas */}
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Minimo"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        {/* Fecha */}
        <div className="col-span-1">
          <InputForm
            type="text"
            label="Fecha"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        {/* Descripcion */}
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Descripcion"
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        {/* Codigo de Barras */}
        <div className="col-span-2">
          <InputForm
            type="text"
            label="Codigo de barras"
            textCenter={true}
            nameInput="keyName"
            register={register}
            value={dataProduct.keyName || ""}
            // validations={{ required: true, min: 2 }}
          />
        </div>
        <div className="col-span-1">
          <ButtonText type={false}>Enviar</ButtonText>
        </div>
      </div>
    </form>
  );
}

export default FormProduct;
