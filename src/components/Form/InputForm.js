import React from "react";

function InputForm({
  type,
  value,
  label,
  nameInput,
  register,
  validations = {},
  textCenter = false,
}) {
  return (
    <div className="w-full h-full flex flex-col">
      <label className="text-xs">{label}</label>
      <input
        className={`w-full h-full px-2 rounded-lg bg-white outline outline-1 outline-pink-0 ${
          textCenter ? "text-center" : ""
        } `}
        type={type}
        {...register(nameInput, validations)}
        defaultValue={value}
      />
    </div>
  );
}

export default InputForm;
