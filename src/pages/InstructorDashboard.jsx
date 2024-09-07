import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidenav from '../components/Sidenav';
import Footer from '../components/Footer';

const InstructorDashboard = () => {
  return (
    <>
    <div className="flex flex-col lg:flex-row overflow-hidden bg-[#E6E6E9]">
      <Sidenav />
      <Outlet />
    </div>
    <Footer/>
    </>
  );
}

export default InstructorDashboard