import * as constants from "../utils/constants";

const PATH = "order";

const getTickets = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);

  return response.json();
};

const getDetailsTicket = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);

  return response.json();
};

const postTicket = async (data) => {
  const d = new Date();
  const fecha = d.toISOString().split("T")[0];
  const obj = {
    ...data,
    fechaCreacion: fecha,
    fechaModificacion: fecha,
    eliminar: 0,
  };
  const response = await fetch(`${constants.API_URL}${PATH}/detailed`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  return response.json();
};

export { getTickets, getDetailsTicket, postTicket };
