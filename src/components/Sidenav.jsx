import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { instructorDashboard } from "../constants/data";
import logo from "../assets/logoThree.svg";
import useAuthStore from "../store/authStore";

const Sidenav = () => {
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();
  // Function to toggle sublinks
  const handleToggle = (index) => {
    // If the clicked section is already open, close it, otherwise set it as the open section
    setOpenSection(openSection === index ? null : index);
  };
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    navigate("/");
  };
  return (
    <div className="bg-primary !w-[350px] hidden lg:flex flex-col px-8 py-9 border border-[#808080]">
      <Link to="/instructor-dashboard" className="mb-4">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        {instructorDashboard.map((item, index) => (
          <li
            key={index}
            className="py-7 border-b-[0.5px] border-[#E6E6E9] last:border-b-0"
          >
            {item.sublinks ? (
              <div
                className="flex justify-between items-center text-white cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-center gap-[10px]">
                  <img src={item.icon} alt={`${item.text} icon`} />
                  <span>{item.text}</span>
                </div>
                {item.sublinks && (
                  <MdKeyboardArrowRight
                    className={`text-2xl transition-transform duration-300 ${
                      openSection === index ? "rotate-90" : "rotate-0"
                    }`}
                  />
                )}
              </div>
            ) : (
              <div>
                {item.text === "Log out" ? (
                  <button
                    onClick={handleLogout}
                    className="flex justify-between items-center gap-[10px] text-white"
                  >
                    <div className="flex items-center gap-[10px]">
                      <img src={item.icon} alt="" />
                      <span>{item.text}</span>
                    </div>
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className="flex justify-between items-center gap-[10px] text-white"
                  >
                    <div className="flex items-center gap-[10px]">
                      <img src={item.icon} alt="" />
                      <span>{item.text}</span>
                    </div>
                  </Link>
                )}
              </div>
            )}

            {item.sublinks && openSection === index && (
              <ul className="mt-3 ml-[18px]">
                {item.sublinks.map((sublink, subIndex) => (
                  <li key={subIndex} className="py-2">
                    <Link
                      to={sublink.to}
                      className={`text-white py-[10px] pl-[10px] pr-8 rounded-[10px] ${
                        location.pathname.startsWith(sublink.to)
                          ? "bg-[#346580B2]"
                          : ""
                      }`}
                    >
                      {sublink.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
