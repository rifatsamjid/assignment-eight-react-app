import React from "react";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ToastContainer position="top-center" autoClose={2000} />
      <Footer></Footer>
    </div>
  );
};

export default Root;
