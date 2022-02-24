import * as constants from "../utils/constants";

const PATH = "order";

const getTickets = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);
  return response.json();
};

const updateTicket = async (data, id) => {
  const obj = {
    ...data,
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

const postTicketDetail = async (data) => {
  console.log("service post", data);
  const d = new Date();
  const fecha = d.toISOString().split("T")[0];
  const obj = {
    ...data,
    fechaCreacion: fecha,
    fechaModificacion: fecha,
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

const logicDeleteTicket = async (id) => {
  const response = await fetch(`${constants.API_URL}${PATH}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ eliminar: true }),
  });
  return response.json();
};

const getDetailsTicketById = async (id) => {
  const response = await fetch(`${constants.API_URL}${PATH}/detailed/${id}`);
  return response.json();
};

const postTicket = async (data) => {
  const d = new Date();
  const dia = d.getDate();
  const mes = d.getMonth() + 1;
  const año = d.getFullYear();
  const fecha = `${dia}/${mes}/${año}`;
  const obj = {
    ...data,
    fechaCreacion: fecha,
    fechaModificacion: fecha,
    estadoOrden: "",
    usuarioCreacion: "",
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

export {
  getTickets,
  postTicket,
  updateTicket,
  postTicketDetail,
  logicDeleteTicket,
  getDetailsTicketById,
};
