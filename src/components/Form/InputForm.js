import { Form, Input } from "antd";
import React from "react";

function InputForm({ type, label, nameInput, textCenter = false }) {
  const validations = {
    comun: { required: true, message: "El nombre es obligatorio" },
    clave: {
      required: true,
      message: "El nombre clave es obligatorio",
    },
    cantidad: {
      required: true,
      message: "Las Piezas son obligatorias",
    },
    cantidadMinima: {
      required: true,
      message: "La piezas minimas es obligatorias",
    },
    precio: {
      required: true,
      message: "El precio es obligatorio",
    },
    codigoBarras: {
      required: true,
      message: "El codigo de barras es obligatorio",
    },
  };
  let validation;
  if (nameInput in validations) validation = [validations[nameInput]];
  else validation = [];

  return (
    <Form.Item
      className="mt-0 p-0 h-full"
      label={label}
      name={nameInput}
      rules={validation}
    >
      <Input
        type={type}
        className={`mb-0 max-w-full ${textCenter ? "text-center" : ""}`}
      />
    </Form.Item>
  );
}

export default InputForm;
