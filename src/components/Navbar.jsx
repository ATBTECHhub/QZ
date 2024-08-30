import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    <nav className="h-[96px] flex items-center fixed w-full z-[2] bg-white font-pop">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="gap-12 hidden lg:flex text-base font-medium">
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
        <Link>
          <button
            to="/"
            className="px-[50px] bg-secondary rounded-[30px] py-[10px] text-base font-medium shadow-btnShadow hidden lg:block"
          >
            Log in
          </button>
        </Link>
        <IoMenu className="text-2xl lg:hidden"/>
      </div>
    </nav>
  );
};

export default Navbar;
