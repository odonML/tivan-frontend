import React, { useState } from "react";
import { RiScissors2Line } from "react-icons/ri";
import ContentLeft from "components/shared/ContentLeft";
import ContentRight from "components/shared/ContentRight";
import CardTicket from "../components/CardTicket/CardTicket";
import ContentGrid from "../components/shared/ContentGrid";
import ButtonIcon from "../components/shared/ButtonIcon";
import TicketDetails from "../components/sub-pages/TicketDetails";

function Sales() {
  const [tab, setTab] = useState(1);
  // const [dataProduct, setDataProduct] = useState();

  return (
    <ContentGrid>
      <div
        className={`${
          tab === 1 ? "grid" : "hidden"
        } grid md:grid col-span-1 row-span-1 md:col-span-3 lg:col-span-4 md:row-span-2`}
      >
        <ContentLeft
          title="Sales"
          element={
            <div className="flex justify-end py-1">
              <ButtonIcon icon={<RiScissors2Line size={22} />} />
            </div>
          }
        >
          <div className="col-span-1 md:col-span-2 lg:col-span-1 co-span-1">
            <CardTicket />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 co-span-1">
            <CardTicket />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 co-span-1">
            <CardTicket />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 co-span-1">
            <CardTicket />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 co-span-1">
            <CardTicket />
          </div>
        </ContentLeft>
      </div>
      <div
        className={` ${
          tab === 2 ? "grid col-span-2 row-span-1" : "hidden"
        } md:grid md:col-span-3 lg:col-span-2 md:row-span-4`}
      >
        <ContentRight title="Ticket">
          <div className="col-span-1 h-full">
            <TicketDetails />
          </div>
        </ContentRight>
      </div>
      <div className=" absolute border bottom-0 w-full h-[5%] py-1 flex items-center justify-center md:hidden">
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
