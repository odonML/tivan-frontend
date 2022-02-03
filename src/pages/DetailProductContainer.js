import React from "react";
import { Outlet } from "react-router-dom";

function DetailProductContainer() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default DetailProductContainer;
