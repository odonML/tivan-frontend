import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, message, Upload } from "antd";
import React, { useState } from "react";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  // VALIDACIONES de formato
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  // VALIDACIONES de tamaño
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

function FormProduct({ onFinish, onFinishFailed, data }) {
  const [load, setLoad] = useState({});

  const handleChange = (info) => {
    console.log(info.file.status);
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (imageUrl) =>
      setLoad({
        imageUrl,
        loading: false,
      })
    );
  };
  const { loading, imageUrl = "" } = load;
  return (
    <Form
      className="w-full h-full"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
          ) : (
            <div>
              {loading ? <LoadingOutlined /> : <PlusOutlined />}
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>

        <div className=" col-span-2 border">
          <Form.Item
            className="mt-0 p-0 h-full flex flex-col"
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input className="mb-0 max-w-full" />
          </Form.Item>
        </div>
        <div className="col-span-2 h-7">
          <Form.Item
            className="mt-0 h-full"
            label="Nombre Clave"
            name="keyName"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input className="h-full ml-1" />
          </Form.Item>
        </div>
        <div className="relative col-span-2 h-7 border">
          <Form.Item
            className="absolute mt-0 h-full"
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input className="h-full" />
          </Form.Item>
        </div>
        <div className="relative col-span-2 h-7 border">
          <Form.Item
            className="absolute mt-0 h-full"
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input className="h-full" />
          </Form.Item>
        </div>
        <div className="relative col-span-2 h-7 border">
          <Form.Item
            className="absolute mt-0 h-full"
            label="Nombre"
            name="name"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input className="h-full" />
          </Form.Item>
        </div>
        <div className="relative col-span-2 h-7 border">
          <Form.Item
            className="absolute w-full mb-0 h-full"
            name="name"
            rules={[
              {
                required: true,
                message: "Campo obligatorio",
              },
            ]}
          >
            <Input className="h-full w-full" placeholder="Nombre" size="5" />
          </Form.Item>
        </div>
      </div>
    </Form>
    // <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
    //   <div className="">
    //     {/* IMAGE */}
    //     <div className="col-span-2 h-24 py-2 bg-gray-2 rounded-lg">
    //       <InputFile value="" nameInput="image" register={register} />
    //       {/* <input type="file" ref={register} name="image" /> */}
    //     </div>
    //     {/* Nombre Producto */}
    //     <div className="col-span-2">
    //       <InputForm
    //         type="text"
    //         label="Nombre"
    //         nameInput="nombre"
    //         register={register}
    //         value={dataProduct.name || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     {/* Nombre clave */}
    //     <div className="col-span-2">
    //       <InputForm
    //         type="text"
    //         label="Clave"
    //         nameInput="keyName"
    //         register={register}
    //         value={dataProduct.keyName || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     {/* Piezas */}
    //     <div className="col-span-1">
    //       <InputForm
    //         type="text"
    //         label="Piezas"
    //         nameInput="keyName"
    //         register={register}
    //         value={dataProduct.keyName || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     {/* Precio */}
    //     <div className="col-span-1">
    //       <InputForm
    //         type="text"
    //         label="Precio"
    //         nameInput="keyName"
    //         register={register}
    //         value={dataProduct.keyName || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     {/* Minimo de piezas */}
    //     <div className="col-span-1">
    //       <InputForm
    //         type="text"
    //         label="Minimo"
    //         nameInput="keyName"
    //         register={register}
    //         value={dataProduct.keyName || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     {/* Fecha */}
    //     <div className="col-span-1">
    //       <InputForm
    //         type="text"
    //         label="Fecha"
    //         nameInput="keyName"
    //         register={register}
    //         value={dataProduct.keyName || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     {/* Descripcion */}
    //     <div className="col-span-2">
    //       <InputForm
    //         type="text"
    //         label="Descripcion"
    //         nameInput="keyName"
    //         register={register}
    //         value={dataProduct.keyName || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     {/* Codigo de Barras */}
    //     <div className="col-span-2">
    //       <InputForm
    //         type="text"
    //         label="Codigo de barras"
    //         textCenter={true}
    //         nameInput="keyName"
    //         register={register}
    //         value={dataProduct.keyName || ""}
    //         // validations={{ required: true, min: 2 }}
    //       />
    //     </div>
    //     <div className="col-span-1">
    //       <ButtonText type={false}>Enviar</ButtonText>
    //     </div>
    //   </div>
    // </form>
  );
}

export default FormProduct;
