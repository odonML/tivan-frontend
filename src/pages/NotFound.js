import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="custom-container">
      <div className=" flex flex-col items-center justify-center gap-8">
        <p className="text-pink-0 text-6xl fredoka">Not Found xD</p>
        <div className="flex gap-8">
          <Button type="primary" onClick={() => navigate(`/`)}>
            Atras
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
