import React from "react";
import NavBar from "../../components/Header/NavBar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
