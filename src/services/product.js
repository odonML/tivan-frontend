import * as constants from "../utils/constants";

const PATH = "productos";

const getProducts = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);
  return response.json();
};

const updateProduct = async (data, id) => {
  const obj = {
    ...data,
    favorito: 0,
    eliminar: 0,
  };
  const response = await fetch(`${constants.API_URL}${PATH}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return response.json();
};

const postProduct = async (data) => {
  console.log("service post", data);
  const d = new Date();
  const fecha = d.toISOString().split("T")[0];
  const obj = {
    ...data,
    fechaCreacion: fecha,
    fechaModificacion: fecha,
    favorito: 0,
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

const addProductToFavorites = async (id, fav) => {
  const body = {
    favorito: fav,
  };
  const response = await fetch(`${constants.API_URL}${PATH}/${id}/favorito`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.json();
  // console.log("este producto es favorito", id, fav);
};

const uploadFileProduct = async (file) => {
  const response = await fetch(`${constants.API_URL}${PATH}/uploadImage`, {
    method: "POST",
    body: file,
  });
  const result = await response.json();
  return result.url;
  // .then((response) => response.json())
  // .then((result) => {
  //   console.log("Success: ----------------------", result);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
};

export {
  getProducts,
  updateProduct,
  postProduct,
  logicDeleteProduct,
  addProductToFavorites,
  uploadFileProduct,
};
