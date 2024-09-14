import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
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
          <div className="flex items-center gap-[40px]">
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
        )}
      </div>
    </div>
  );
};

export default ManageUser;
