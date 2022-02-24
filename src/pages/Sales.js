import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import React, { useEffect, useState } from "react";
import CardTicket from "../components/CardTicket/CardTicket";
import ContentGrid from "../components/shared/ContentGrid";
import TicketDetails from "../components/sub-pages/TicketDetails";
import * as serviceSales from "../services/sales";

function Sales() {
  const [tab, setTab] = useState(1);
  const [sales, setSales] = useState([]);
  const [details, setDetails] = useState({});

  const getDetailsTicketById = async (idOrden) => {
    const data = await serviceSales.getDetailsTicketById(idOrden);
    setDetails(data);
  };

  const getTickets = async () => {
    const data = await serviceSales.getTickets();
    const eliminatedTicket = data.filter((ticket) => ticket.eliminar === null);
    const lastTicketPrinted = eliminatedTicket[eliminatedTicket.length - 1];
    getDetailsTicketById(lastTicketPrinted.idOrden);
    // cambiar null a 0
    setSales(eliminatedTicket);
  };

  const showTicketDetails = (idOrden) => {
    getDetailsTicketById(idOrden);
  };

  const logicDeleteTicket = async (id) => {
    const data = await serviceSales.logicDeleteTicket(id);
    getTickets();
  };

  useEffect(() => {
    getTickets();
  }, []);
  // console.log(sales);

  return (
    <ContentGrid
      gridCol="grid-cols-1 md:grid-cols-6"
      gridRow="grid-rows-1 md:grid-rows-1"
    >
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } grid col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 row-span-4`}
      >
        <ContentLeft title="Ventas">
          {sales
            .map((ticket) => (
              <div
                key={ticket.idOrden}
                className="col-span-1 md:col-span-1 lg:col-span-1"
              >
                <CardTicket
                  ticket={ticket}
                  clickCard={showTicketDetails}
                  clickDelete={logicDeleteTicket}
                />
              </div>
            ))
            .reverse()}
        </ContentLeft>
      </div>
      <div
        className={` ${
          tab === 2 ? "grid col-span-2 row-span-1" : "hidden"
        } lg:grid lg:col-span-2 md:row-span-4`}
      >
        <ContentRight title="Ticket">
          <div className="col-span-2 h-full">
            <TicketDetails ticketDaraDetails={details} />
          </div>
        </ContentRight>
      </div>
      <div className=" absolute bottom-0 w-full h-[5%] py-1 flex items-center justify-center lg:hidden">
        <div className="flex w-2/3 text-white text-base">
          <div className="w-full">
            <button
              type="button"
              className={`w-full rounded-l-full ${
                tab === 1 ? "bg-pink-0" : "bg-purple-0"
              }`}
              onClick={() => setTab(1)}
            >
              Sales
            </button>
          </div>

          <div className="w-full">
            <button
              type="button"
              className={`w-full rounded-r-full ${
                tab === 2 ? "bg-pink-0" : "bg-purple-0"
              }`}
              onClick={() => setTab(2)}
            >
              Ticket
            </button>
          </div>
        </div>
      </div>
    </ContentGrid>
  );
}

export default Sales;
