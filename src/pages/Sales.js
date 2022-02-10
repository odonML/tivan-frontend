import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ContentTitle from "../components/shared/ContentTitle";
import Content from "../components/shared/Content";
import CardTicket from "../components/CardTicket/CardTicket";
import ContentGrid from "../components/shared/ContentGrid";
import ButtonIcon from "../components/shared/ButtonIcon";
import TicketDetails from "../components/sub-pages/TicketDetails";

function Sales() {
  const [tab, setTab] = useState(1);

  return (
    <Content>
      <ContentGrid bgColor="bg-gray-3">
        <div
          className={`${
            tab === 1 ? "grid" : "hidden"
          } sm:grid col-span-1 row-span-1 md:col-span-4 md:row-span-6 h-1 m-2 p-2 gap-2`}
        >
          <ContentTitle>
            <p>Ventas</p>
            <ButtonIcon icon={<AiOutlinePlus size={22} />} />
          </ContentTitle>
          <div className="flex flex-wrap gap-4">
            <CardTicket />
            <CardTicket />
            <CardTicket />
            <CardTicket />
            <CardTicket />
            <CardTicket />
            <CardTicket />
            <CardTicket />
          </div>
        </div>
        <div
          className={`${
            tab === 2 ? "grid col-span-2 row-span-1" : "hidden"
          } md:grid md:col-span-2 md:row-span-4`}
        >
          <TicketDetails className="bg-white" />
        </div>
        <div className="absolute bottom-0 w-full h-7 px-1 flex justify-center md:hidden">
          <div className="flex w-2/3 text-white text-base">
            <div className="w-1/2">
              <button
                type="button"
                className={`w-full rounded-l-full ${
                  tab === 1 ? "bg-purple-0" : "bg-pink-0"
                }`}
                onClick={() => setTab(1)}
              >
                Ventas
              </button>
            </div>
            <div className="w-1/2">
              <button
                type="button"
                className={`w-full rounded-r-full ${
                  tab === 2 ? "bg-purple-0" : "bg-pink-0"
                }`}
                onClick={() => setTab(2)}
              >
                Ticket
              </button>
            </div>
          </div>
        </div>
      </ContentGrid>
    </Content>
  );
}

export default Sales;
