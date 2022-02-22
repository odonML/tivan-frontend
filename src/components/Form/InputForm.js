import { Form, Input } from "antd";
import React from "react";

function InputForm({ type, label, nameInput, textCenter = false }) {
  const rexNumber = /[0-9]/;
  const rexClave = /\B(#[a-zA-Z]+$\b)/;
  const rexText = /^([a-zA-Z0-9 ])/;
  const validations = {
    comun: [
      { required: true, message: "El nombre es obligatorio" },
      {
        pattern: new RegExp(rexText),
        message: "Solo se aceptan letras y numeros",
      },
    ],
    clave: [
      {
        required: true,
        message: "El nombre clave es obligatorio",
      },
      {
        pattern: new RegExp(rexClave),
        message: "El formato no es aceptado, ejemplo: #SaSal",
      },
    ],
    descripcion: [
      {
        pattern: new RegExp(rexText),
        message: "Solo se aceptan letras y numeros",
      },
    ],
    cantidad: [
      {
        required: true,
        message: "Las piezas son obligatorias",
      },
      {
        pattern: new RegExp(rexNumber),
        message: "Solo se aceptan numeros",
      },
    ],
    cantidadMinima: [
      {
        required: true,
        message: "La piezas minimas es obligatorias",
      },
      { pattern: new RegExp(rexNumber), message: "Solo se aceptan numeros" },
    ],
    precio: [
      {
        required: true,
        message: "El precio es obligatorio",
      },
      { pattern: new RegExp(rexNumber), message: "Solo se aceptan numeros" },
    ],
    codigoBarras: [
      {
        required: true,
        message: "El codigo de barras es obligatorio",
      },
      { pattern: new RegExp(rexNumber), message: "Solo se aceptan numeros" },
    ],
  };
  let validation;
  if (nameInput in validations) validation = validations[nameInput];
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
