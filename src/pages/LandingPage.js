import { Button, Drawer } from "antd";
import Logo from "components/shared/Logo";
import Navbar from "components/shared/Navbar";
import React, { useState } from "react";

function LandingPage() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="w-full">
      <Navbar>
        <Logo>Tivan</Logo>
      </Navbar>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

export default LandingPage;
