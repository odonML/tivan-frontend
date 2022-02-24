import ButtonIcon from "components/shared/ButtonIcon";
import Container from "components/shared/Container";
import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import Sidebar from "components/shared/Sidebar";
import React from "react";
import { AiOutlineDropbox } from "react-icons/ai";
import { BsUpcScan } from "react-icons/bs";
import { HiViewGridAdd } from "react-icons/hi";
import { MdAttachMoney, MdHome } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const buttonsOfPages = [
    {
      id: "1",
      text: "Suply",
      icon: <HiViewGridAdd size={30} />,
      action: () => navigate(`suply`),
    },
    {
      id: "2",
      text: "Ventas",
      icon: <MdAttachMoney size={30} />,
      action: () => navigate(`sales`),
    },
    {
      id: "3",
      text: "Stock",
      icon: <AiOutlineDropbox size={30} />,
      action: () => navigate(`stock`),
    },
    {
      id: "4",
      text: "Home",
      icon: <MdHome size={29} />,
      action: () => navigate(`/home`),
    },
    // {
    //   id: "05",
    //   text: "Carrito",
    //   icon: <FaShoppingCart size={20} />,
    //   action: () => console.log("Carrito"),
    // },
  ];

  return (
    <Container height="h-screen" flexDirection="flex-col">
      <Navbar>
        <Logo>Tivan</Logo>
      </Navbar>
      <Container
        height="h-full"
        flexDirection="flex-col-reverse"
        mediaQueries="lg:flex-row"
      >
        <Sidebar buttonsOfPages={buttonsOfPages}>
          <div className="hidden lg:flex lg:flex-col md:items-center md:gap-2">
            <ButtonIcon icon={<BsUpcScan size={35} />} />
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
