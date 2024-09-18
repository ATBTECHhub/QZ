import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const ManageUser = () => {
  const [activeTab, setActiveTab] = useState("Manage User");
  const navigate = useNavigate();
  const tabs = ["Dashboard", "Create User", "Manage User"];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Dashboard") {
      navigate("/instructor-dashboard");
    } else if (tab === "Create User") {
      navigate("/instructor-dashboard/create-user");
    }
  };
  return (
    <div className="pl-[54px] py-[59px]">
      <h1 className="font-semibold text-[32px] font-fustat leading-[45px]">
        Manage User
      </h1>
      <div className="flex space-x-4 border-b border-gray-300 mt-[31px] mb-[25px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`py-2 px-4 focus:outline-none text-xl font-extrabold ${
              activeTab === tab
                ? "border-b-4 border-primary text-primary"
                : "text-[#346580B2] hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {activeTab === "Manage User" && (
          <>
            <div className="flex items-center gap-[40px] mb-[70px] ">
              <div className="flex items-center border border-darkPrimary pr-5 py-[14px] pl-[14px] rounded-[5px]">
                <label htmlFor="search-box">
                  <IoIosSearch className="text-[28px] text-[#808080B2]" />
                </label>
                <input
                  type="text"
                  placeholder="James Emmanuel"
                  id="search-box"
                  className="bg-transparent font-medium text-base w-[450px] outline-none text-darkPrimary ml-2"
                />
                <IoFilter className="text-[28px] text-[#808080B2]" />
              </div>
              <button className="py-3 px-[43px] border border-primary bg-white rounded-[8px] text-2xl font-medium">
                Add User
              </button>
            </div>
            <div className="pb-10 px-5 pt-[17px] bg-white rounded-[12px] mb-5">
              <h2 className="text-base font-extrabold font-fustat text-primary">
                James Emmanuela
              </h2>
              <p className="pt-[18px] pb-[11px] text-base text-darkPrimary">
                Email address: <span>jamesemma@gmil.com</span>
              </p>
              <div className="border-t border-[#E6E6E9] flex items-center justify-between pt-[10px]">
                <div className="flex gap-5">
                  <p className="flex gap-1 text-[#00000099]">
                    <FaRegCalendarAlt className="text-xl text-[#346580] opacity-[0.7]" />
                    Date Created
                    <span className="text-black"> 23rd Aug 2024</span>
                  </p>
                  <p className="flex gap-1 text-[#00000099]">
                    <MdAccessTime className="text-xl text-[#346580] opacity-[0.7]" />
                    Last Updated{" "}
                    <span className="text-black">24th Aug 2024</span>
                  </p>
                </div>
                <div className="flex gap-[10px] items-center text-primary">
                  <FaRegEdit className="cursor-pointer" />
                  <RiDeleteBin5Fill className="cursor-pointer" />
                </div>
                
              </div>
            </div>
            <div className="text-2xl font-medium font-rubik flex gap-[39px] items-center pt-5">
              <button className="text-white bg-primary py-3 rounded-lg w-[187px] whitespace-nowrap">
                Assign Test
              </button>
              <button className="text-primary py-3 rounded-lg border border-btnDashboard w-[187px] whitespace-nowrap">
                Change Status
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageUser;
