import Image from "components/shared/Image";
import React, { useState } from "react";

function InputFile({ value, register, nameInput, validations = {} }) {
  const [image, setImage] = useState("");
  const showImage = (e) => {
    // const data = URL.createObjectURL(e.target.files[0]);
    const data = e.target.files[0];
    setImage(data);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("myFile", image);
    console.log(formData);
  };
  return (
    <div className="w-full h-full flex flex-col">
      <input
        id="inputImage"
        className={` w-full h-full px-2 rounded-lg bg-white outline outline-1 outline-pink-0 hidden`}
        type="file"
        {...register(nameInput, validations)}
        defaultValue={value}
        name={nameInput}
        onChange={showImage}
        accept="image/*"
      />
      <label
        htmlFor="inputImage"
        className="w-full h-full flex items-center justify-center cursor-pointer"
      >
        <div className="min-w-[20%] h-full flex items-center justify-center rounded-lg bg-gray-3">
          {image !== "" ? (
            <Image img={image} text="imagen" />
          ) : (
            <p>Upload Image</p>
          )}
        </div>
      </label>
      <button type="button" onClick={() => onSubmit()}>
        {" "}
        hola
      </button>
    </div>
  );
}

export default InputFile;
