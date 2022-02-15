import "antd/dist/antd.css";
import App from "App";
import Demo from "components/Demo";
import Login from "pages/auth/Login";
import SignIn from "pages/auth/SignIn";
import Home from "pages/Home";
import LandingPage from "pages/LandingPage";
import Layout from "pages/Layout";
import Sales from "pages/Sales";
import Stock from "pages/Stock";
import Suply from "pages/Suply";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="ui" element={<Demo />} />
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="log-in" element={<Login />} />
          <Route path="sing-in" element={<SignIn />} />
          <Route path="Home" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="stock" element={<Stock />} />
            <Route path="sales" element={<Sales />} />
            <Route path="suply" element={<Suply />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
