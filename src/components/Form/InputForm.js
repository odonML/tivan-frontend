import { Form, Input } from "antd";
import React from "react";

function InputForm({ type, label, nameInput, textCenter = false }) {
  const rexNumber = /^\b[0-9]+$/;
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
    cantidadMinima: [
      { pattern: new RegExp(rexNumber), message: "Solo se aceptan numeros" },
      {
        required: true,
        message: "La piezas minimas es obligatorias",
      },
    ],
    cantidad: [
      {
        pattern: new RegExp(rexNumber),
        message: "Solo se aceptan numeros",
      },
      {
        required: true,
        message: "Las piezas son obligatorias",
      },
    ],
    precio: [
      { pattern: new RegExp(rexNumber), message: "Solo se aceptan numeros" },
      {
        required: true,
        message: "El precio es obligatorio",
      },
    ],
    codigoBarras: [
      { pattern: new RegExp(rexNumber), message: "Solo se aceptan numeros" },
      {
        required: true,
        message: "El codigo de barras es obligatorio",
      },
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
        className={`max-w-full ${textCenter ? "text-center" : ""}`}
      />
    </Form.Item>
  );
}

export default InputForm;
