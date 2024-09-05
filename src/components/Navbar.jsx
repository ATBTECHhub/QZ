import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="h-[96px] flex items-center fixed w-full z-[2] bg-white font-pop">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="gap-12 hidden lg:flex text-base font-medium text-black">
          <li className="">
            <NavLink to="/">Home </NavLink>
          </li>

          <li className="">
            <NavLink to="/features"> Features </NavLink>
          </li>

          <li className="">
            <NavLink to="/pricing">Pricing </NavLink>
          </li>

          <li className="">
            <NavLink to="/about-us">About us</NavLink>
          </li>

          <li className="">
            <NavLink to="/contact-us">Contact us</NavLink>
          </li>
        </ul>
        <Link to="/login">
          <button className="px-[50px] bg-secondary rounded-[30px] py-[10px] text-base font-medium shadow-btnShadow hidden lg:block">
            Log in
          </button>
        </Link>
        <IoMenu className="text-2xl lg:hidden" onClick={handleNav} />
      </div>
      <div
        style={{
          transition: "all 0.3s ease",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
        className={
          nav
            ? "bg-white fixed z-[4] top-0 right-0 w-full h-screen"
            : "hidden"
        }
      >
        <div className="flex justify-between items-center px-[15px] py-[20px]">
          <Link>
            <img src={logo} alt="/" />
          </Link>
          <IoClose className="text-3xl text-primary" onClick={handleNav} />
        </div>
        <ul className="text-base font-medium text-darkPrimary">
          <li className="px-[15px] py-[20px] font-normal leading-[24px] border-y border-gray">
            <Link to="/" className="leading-4" onClick={handleNav}>
              Home{" "}
            </Link>
          </li>

          <li className="px-[15px] py-[20px] leading-[24px]">
            <Link to="/features" className="leading-4" onClick={handleNav}>
              Features
            </Link>
          </li>

          <li className="px-[15px] py-[20px] leading-[24px] border-y border-gray">
            <Link to="/about-us" className="leading-4" onClick={handleNav}>
              About us
            </Link>
          </li>

          <li className="px-[15px] py-[20px] leading-[24px] border-b border-gray">
            <Link to="/contact-us" className="leading-4" onClick={handleNav}>
              Contact us
            </Link>
          </li>
          <li className="px-[15px] py-[30px] leading-[24px]">
            <Link
              to="/"
              className="px-[50px] bg-secondary rounded-[30px] py-[10px]
              text-base font-medium shadow-btnShadow"
              onClick={handleNav}
            >
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
