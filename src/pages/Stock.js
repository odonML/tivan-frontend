import { Drawer, message } from "antd";
import CardProduct from "components/CardProduct/CardProduct";
import FormProduct from "components/Form/FormProduct";
import ButtonIcon from "components/shared/ButtonIcon";
import ContentGrid from "components/shared/ContentGrid";
import ContentLeft from "components/shared/ContentLeft";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import * as serviceProduct from "../services/product";

function Stock() {
  const [dataProduct, setDataProduct] = useState({});
  const [operation, setOperation] = useState("add");
  const [products, setProducts] = useState([]);
  const [getError, setGetError] = useState(false);
  // drawer
  const [visible, setVisible] = useState(false);

  const postProduct = async (data) => {
    // console.log(data);
    await serviceProduct.postProduct(data);
    message.success("Producto Agregado!");
  };
  const updateProduct = async (data, id) => {
    console.log("update ", data);
    const response = await serviceProduct.updateProduct(data, id);
    message.success("Producto Actualizado!");
  };
  const getProducts = async () => {
    const allData = await serviceProduct.getProducts();
    const data = allData.filter((product) => product.eliminar === 0);
    if (data === undefined) {
      setGetError(true);
      return;
    }
    setProducts(data);
  };

  const showDrawer = (op) => {
    setVisible(true);
    setOperation(op);
  };

  const onClose = () => {
    setVisible(false);
    setDataProduct({});
    setOperation("add");
    getProducts();
  };

  // form
  const onFinish = async (values, image, code) => {
    let newObj;
    const codeExist = products.filter(
      (product) => product.codigoBarras === Number(code)
    );
    if (codeExist.length === 0) {
      if (operation === "add") {
        const formDataImage = new FormData();
        formDataImage.append("image", image);
        const urlImage = await serviceProduct.uploadFileProduct(formDataImage);
        newObj = { ...values, image: urlImage, codigoBarras: code };
        postProduct(newObj);
        onClose();
      } else {
        newObj = { ...values, image, codigoBarras: code };
        updateProduct(newObj, dataProduct.idProducto);
        onClose();
      }
    } else {
      message.error("el Codigo de barras ya existe");
    }
  };

  // form error
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onDeleteWithForm = async () => {
    const id = dataProduct.idProducto;
    await serviceProduct.logicDeleteProduct(id);
    message.error("El producto fue eliminado!");
    onClose();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ContentGrid>
      <div className="grid md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-6 md:row-span-4">
        <ContentLeft
          title="Inventario"
          element={
            <ButtonIcon
              icon={<AiOutlinePlus />}
              click={() => {
                showDrawer("add");
                setDataProduct({});
              }}
            />
          }
          gridCols="sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {getError ? (
            <div className="text-center">
              <p>lo sentimos o se puedieron cargar los productos</p>
            </div>
          ) : (
            ""
          )}
          {products.map((product) => (
            <div
              key={product.idProducto}
              className="col-span-1 md:col-span-2 lg:col-span-1 h-28"
            >
              <CardProduct
                product={product}
                clickCard={() => {
                  showDrawer("edit");
                  setDataProduct(product);
                }}
              />
            </div>
          ))}
        </ContentLeft>
      </div>

      <Drawer
        title={operation === "edit" ? "Detalle" : "Nuevo producto"}
        placement="right"
        onClose={onClose}
        visible={visible}
        className="h-full"
      >
        <FormProduct
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          deleteProduct={onDeleteWithForm}
          operation={operation}
          data={dataProduct}
        />
      </Drawer>
    </ContentGrid>
  );
}

export default Stock;
