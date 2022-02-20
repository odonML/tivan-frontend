import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, message, Upload } from "antd";
import ButtonText from "components/shared/ButtonText";
import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
import TextAreaForm from "./TextAreaForm";

function FormProduct({
  onFinish,
  onFinishFailed,
  deleteProduct,
  data,
  operation,
}) {
  const [load, setLoad] = useState({});
  const [form] = Form.useForm();

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.addEventListener("load", () => callback(reader.result));
  };

  const beforeUpload = (file) => {
    // VALIDACIONES de formato
    const isValidFormat =
      file.type === "image/jpeg" || file.type === "image/png";
    if (!isValidFormat) {
      message.error("You can only upload JPG/PNG file!");
    }
    // VALIDACIONES de tamaño
    const isValidSize = file.size / 1024 / 1024 < 2;
    if (!isValidSize) {
      message.error("Image must smaller than 2MB!");
    }
    return isValidFormat && isValidSize;
  };

  const handleChange = (info) => {
    // console.log(info.file.status);
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, (imageUrl) =>
      setLoad({
        imageUrl,
        loading: false,
      })
    );
  };
  const { loading, imageUrl = "" } = load;

  const loadProfile = () => {
    // console.log("setting field value");
    form.setFieldsValue(data);
  };

  const resetFields = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (operation === "edit") loadProfile();
    else resetFields();
  }, [data]);

  return (
    <Form
      form={form}
      className=" w-full h-auto"
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
      onFinish={(values) => onFinish(values, load.imageUrl)}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="col-span-2 flex items-center justify-center">
          <Upload
            listType="picture-card"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img
                src={imageUrl || form.getFieldValue(["productImg"])}
                alt="avatar"
                className="w-auto max-h-full border"
              />
            ) : (
              <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </div>

        <div className=" col-span-2">
          <InputForm type="text" label="Nombre" nameInput="comun" />
        </div>
        <div className=" col-span-2">
          <InputForm type="text" label="Nombre Clave" nameInput="clave" />
        </div>
        <div className=" col-span-2 ">
          <TextAreaForm label="Descripcion" nameInput="descripcion" />
        </div>
        <div className=" col-span-2 ">
          <InputForm
            type="number"
            label="Piezas minimas"
            nameInput="cantidadMinima"
          />
        </div>
        <div className=" col-span-2">
          <InputForm type="number" label="Piezas" nameInput="cantidad" />
        </div>
        <div className=" col-span-2 ">
          <InputForm type="number" label="Precio" nameInput="precio" />
        </div>
        <div className=" col-span-2 ">
          <InputForm
            type="text"
            label="Codigo de Barras"
            nameInput="codigoBarras"
          />
        </div>

        {operation === "add" ? (
          <div className="col-span-2">
            <ButtonText type={false} txColor="text-[#fff]">
              Agregar
            </ButtonText>
          </div>
        ) : (
          <div className="col-span-2 flex justify-between">
            <div className="col-span-1">
              <ButtonText
                type={true}
                bgColor="bg-pink-0"
                txColor="text-[#fff]"
                click={deleteProduct}
              >
                Eliminar
              </ButtonText>
            </div>
            <div className="col-span-1">
              <ButtonText type={false} txColor="text-[#fff]">
                Editar
              </ButtonText>
            </div>
          </div>
        )}
      </div>
    </Form>
  );
}

export default FormProduct;
