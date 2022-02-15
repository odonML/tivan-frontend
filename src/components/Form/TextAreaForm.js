import { Form, Input } from "antd";
import React from "react";

function TextAreaForm({ label, nameInput, textCenter = false }) {
  const validations = {
    descriptionProduct: {
      require: true,
      message: "La descripcion es obligatorio",
    },
  };
  return (
    <Form.Item
      className="mt-0 p-0 h-full"
      label={label}
      name={nameInput}
      //   rules={[validations[nameInput]]}
    >
      <Input.TextArea
        className={`mb-0 max-w-full ${textCenter ? "text-center" : ""}`}
        autoSize={{ maxRows: 2 }}
      />
    </Form.Item>
  );
}

export default TextAreaForm;
