import { Form, Input } from "antd";
import React from "react";

function InputForm({
  type,
  value,
  label,
  nameInput,
  validations = [],
  textCenter = false,
}) {
  return (
    <Form.Item
      className="mt-0 p-0 h-full"
      label={label}
      name={nameInput}
      rules={
        validations
        // [
        //   {
        //     required: true,
        //     message: "Campo obligatorio",
        //   },
        // ]
      }
    >
      <Input
        type={type}
        className={`mb-0 max-w-full ${textCenter ? "text-center" : ""}`}
      />
    </Form.Item>
  );
}

export default InputForm;
