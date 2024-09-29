import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import TakerSidenav from "../components/TakerSidenav";

const TakerDashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row overflow-hidden bg-[#E6E6E9]">
        <TakerSidenav />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default TakerDashboard;
