import * as constants from "../utils/constants";

const PATH = "productos";

const getProducts = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);
  return response.json();
};

const updateProduct = async (data, id) => {
  const response = await fetch(`${constants.API_URL}${PATH}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const postProduct = async (data) => {
  const d = new Date();
  const fecha = d.toISOString().split("T")[0];
  const obj = {
    ...data,
    fechaCreacion: fecha,
    fechaModificacion: fecha,
    favorito: 1,
    eliminar: 0,
  };
  const response = await fetch(`${constants.API_URL}${PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return response.json();
};

const logicDeleteProduct = async (id) => {
  const response = await fetch(`${constants.API_URL}${PATH}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ eliminar: true }),
  });
  return response.json();
};

export { getProducts, updateProduct, postProduct, logicDeleteProduct };
