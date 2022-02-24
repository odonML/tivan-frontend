import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-purple-0 relative flex items-center justify-center">
      <img
        className=" object-contain w-screen h-screen"
        src="https://tivan-14g-img.s3.amazonaws.com/Logo.png"
        alt="logo"
      />
      <div className="absolute cardGlass p-4 text-white text-lg gap-4 flex flex-col items-center justify-center">
        <p>Log in</p>
        <div className="flex flex-col">
          <label htmlFor="" className="text-base">
            Correo:{" "}
          </label>
          <input
            className="outline-none border-b-2 bg-transparent"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-base">
            Contraseña:{" "}
          </label>
          <input
            className="outline-none border-b-2 bg-transparent"
            type="password"
          />
        </div>
        <div className="flex gap-8">
          <Button type="primary" onClick={() => navigate(`/home`)}>
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

export default Login;
