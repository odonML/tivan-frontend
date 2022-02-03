import ButtonIcon from "components/shared/ButtonIcon";
import Container from "components/shared/Container";
import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import Sidebar from "components/shared/Sidebar";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Container height="h-screen" flexDirection="flex-col">
      <div className="w-full ">
        <Navbar>
          <Logo>Tivan</Logo>
          <div className="block md:hidden">
            <ButtonIcon icon={<BiSearchAlt2 />} />
          </div>
          <div className="hidden md:block">
            <input
              className="rounded-full px-3"
              type="text"
              placeholder="Search..."
            />
          </div>
        </Navbar>
      </div>
      <Container
        height="h-full"
        flexDirection="flex-col-reverse"
        mediaQueries="md:flex-row"
      >
        <Sidebar></Sidebar>
        <Container>
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
}

export default Layout;
