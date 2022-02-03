import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="">
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
