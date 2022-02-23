import React from "react";

function DataTicket({ label, result }) {
  return (
    <div className="flex items-center justify-between">
      <p className="shrink-0">{label} </p>
      <span className="border-dashed border-b-2 w-full h-0 mx-2" />
      <p className="text-b"> {result}</p>
    </div>
  );
}

export default DataTicket;
