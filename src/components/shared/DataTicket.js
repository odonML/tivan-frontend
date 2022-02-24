import React from "react";

function DataTicket({ label, result, signo = false }) {
  return (
    <div className="flex items-center justify-between font-black">
      <p className="shrink-0">{label} </p>
      <span className="border-dashed border-b-2 w-full h-0 mx-2" />
      <div className="flex">
        {signo ? "$" : ""}
        {result}
      </div>
    </div>
  );
}

export default DataTicket;
