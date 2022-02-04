import App from "App";
import Login from "pages/auth/Login";
import SignIn from "pages/auth/SignIn";
import DetailProduct from "pages/DetailProduct";
import DetailProductContainer from "pages/DetailProductContainer";
import Favorites from "pages/Favorites";
import LandingPage from "pages/LandingPage";
import Layout from "pages/Layout";
import Sales from "pages/Sales";
// import ShoppingCar from "pages/ShoppingCar";
import Stock from "pages/Stock";
import Suply from "pages/Suply";
import UpdateProduct from "pages/UpdateProduct";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/" element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path="log-in" element={<Login />} />
          <Route path="sing-in" element={<SignIn />} />
          <Route path="Home" element={<Layout />}>
            <Route index element={<Favorites />} />
            <Route path="stock" element={<Stock />} />
            <Route path="sales" element={<Sales />} />
            <Route path="suply" element={<Suply />} />
            {/* <Route path="shopping-car" element={<ShoppingCar />} /> MODAL */}
            {/* <Route path="new" element={<NewProduct />} /> MODAL */}
            <Route path=":productID" element={<DetailProductContainer />}>
              <Route index element={<DetailProduct />} />
              <Route path="edit" element={<UpdateProduct />} />
            </Route>
            {/* MODAL */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
