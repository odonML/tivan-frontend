import * as constants from "../utils/constants";

const PATH = "productos";

const getProducts = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);

  return response.json();
};
const postProduct = async (data) => {
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

export { getProducts, postProduct };
