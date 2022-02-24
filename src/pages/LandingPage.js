import { Button, Drawer } from "antd";
import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  // const [visible, setVisible] = useState(false);
  // const showDrawer = () => {
  //   setVisible(true);
  // };
  // const onClose = () => {
  //   setVisible(false);
  // };

  const navigate = useNavigate();

  return (
    <div className="bg-purple-0 relative">
      <img
        className=" object-contain w-screen h-screen"
        src="https://tivan-14g-img.s3.amazonaws.com/Logo.png"
        alt="logo"
      />
      <div className="absolute top-[27rem]  md:top-2/3 flex flex-col justify-center items-center w-full gap-10">
        <div>
          <p className="text-xl text-white fredoka md:text-5xl">
            te ayudamos con tu tiendita...!!!
          </p>
        </div>
        <div className="flex gap-8">
          <Button type="primary" onClick={() => navigate(`/log-in`)}>
            Log-in
          </Button>
          <Button type="primary" onClick={() => navigate(`/sing-in`)}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
