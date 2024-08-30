import { Link } from "react-router-dom";
import logoTwo from "../assets/logoTwo.svg"
const Footer = () => {
  return (
    <footer className="bg-footerBg bg-cover bg-center pb-[64px] pt-[46px] text-xl md:text-[32px] text-white">
      <div className="container flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between">
        <Link to="/">
          <img src={logoTwo} alt="logo" />
        </Link>
        <ul>
          <li className="text-secondary mb-[24px] font-semibold">Company</li>
          <li>
            <Link to="/about-us" className="hover:text-secondary  transition ease-in-out delay-100">About</Link>
          </li>
        </ul>
        <ul>
          <li className="text-secondary mb-[24px] font-semibold">Support</li>
          <li>
            <Link to="/about-us" className="hover:text-secondary  transition ease-in-out delay-100">FAQs</Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:text-secondary  transition ease-in-out delay-100">Contact Us</Link>
          </li>
        </ul>
        <ul>
          <li className="text-secondary mb-[24px] font-semibold">Legal</li>
          <li>
            <Link to="/privacy-policy" className="hover:text-secondary  transition ease-in-out delay-100">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-secondary  transition ease-in-out delay-100">Terms of Services</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
