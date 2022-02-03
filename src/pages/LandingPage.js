import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <div className="">
      <Navbar>
        <Logo>Tivan</Logo>
      </Navbar>
      <h1>Home</h1>
      <Outlet />
    </div>
  );
}

export default LandingPage;
