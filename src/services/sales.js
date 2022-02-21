import * as constants from "../utils/constants";

const PATH = "sales";

const getTickets = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);

  return response.json();
};

const getDetailsTicket = async () => {
  const response = await fetch(`${constants.API_URL}${PATH}`);

  return response.json();
};
export { getTickets, getDetailsTicket };
