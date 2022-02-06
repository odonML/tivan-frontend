import ButtonIcon from "components/shared/ButtonIcon";
import Container from "components/shared/Container";
import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import Sidebar from "components/shared/Sidebar";
import React from "react";
import { AiFillHeart, AiOutlineDropbox } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsUpcScan } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const buttonsOfPages = [
    {
      id: "01",
      text: "Suply",
      icon: <BiSearchAlt2 size={20} />,
      action: () => navigate(`suply`),
    },
    {
      id: "02",
      text: "Ventas",
      icon: <RiMoneyDollarCircleLine size={20} />,
      action: () => navigate(`sales`),
    },
    {
      id: "03",
      text: "Inventario",
      icon: <AiOutlineDropbox size={20} />,
      action: () => navigate(`stock`),
    },
    // {
    //   id: "04",
    //   text: "Carrito",
    //   icon: <FaShoppingCart size={20} />,
    //   action: () => console.log("Carrito"),
    // },
    {
      id: "05",
      text: "Faboritos",
      icon: <AiFillHeart size={20} />,
      action: () => navigate(`/home`),
    },
  ];

  return (
    <Container height="h-screen" flexDirection="flex-col">
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
      <Container
        height="h-full"
        flexDirection="flex-col-reverse"
        mediaQueries="md:flex-row"
      >
        <Sidebar buttonsOfPages={buttonsOfPages}>
          <div className="hidden md:flex md:flex-col md:items-center md:gap-2">
            <ButtonIcon icon={<BsUpcScan size={20} />} />
            <ButtonIcon icon={<BiSearchAlt2 size={20} />} />
          </div>
        </Sidebar>
        <Container alingItems="items-start" justifyContent="justify-start">
          <Outlet />
        </Container>
      </Container>
    </Container>
  );
}

export default Layout;
