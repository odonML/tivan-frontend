import React from "react";

function InputForm({
  type,
  value,
  label,
  nameInput,
  register,
  validations = {},
}) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        {...register(nameInput, validations)}
        defaultValue={value}
      />
    </div>
  );
}

export default InputForm;
