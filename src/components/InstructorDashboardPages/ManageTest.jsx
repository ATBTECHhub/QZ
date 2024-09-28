import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Request from "../../lib/requests";
import { Axios } from "../../config";
import { toast } from "react-toastify";
const ManageTest = () => {
  const [activeTab, setActiveTab] = useState("Manage Test");
  const tabs = ["Dashboard", "Create Test", "Manage Test"];
  const navigate = useNavigate();
  const tabRoutes = {
    Dashboard: "/instructor-dashboard",
    "Create Test": "/instructor-dashboard/create-test",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tabRoutes[tab]) {
      navigate(tabRoutes[tab]);
    }
  };
  const [tests, setTests] = useState([]);
  useEffect(() => {
    getTests();
  }, []);
  const getTests = async () => {
    try {
      const res = await Axios.get(Request.allTests);
      console.log(res);
      setTests(res.data);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.message || "An error occurred, please try again later."
      );
    }
  };

  return (
    <section className="pl-[80px] pt-[92px] pb-[59px]">
      <h1 className="font-bold text-2xl font-fustat leading-[34px] text-darkPrimary">
        Manage Test
      </h1>
      <div className="flex space-x-4 border-b border-gray-300 mb-[25px]">
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
        {activeTab === "Manage Test" && (
          <section>
            {/* Searchbox */}
            <div className="bg-white pl-6 pr-[50px] pt-[46px] pb-[68px] rounded-[12px]">
              <div className="flex items-center border border-darkPrimary pr-5 py-[14px] pl-[14px] rounded-[5px]">
                <label htmlFor="search-box">
                  <IoIosSearch className="text-[28px] text-[#808080B2]" />
                </label>
                <input
                  type="text"
                  placeholder="Search test by category"
                  id="search-box"
                  className="bg-transparent font-medium text-base w-[500px] outline-none text-darkPrimary ml-2"
                />
                <IoFilter className="text-[28px] text-[#808080B2]" />
              </div>
            </div>
            {tests.map((test, i) => (
              <div key={i} className="bg-[#FAF7ED99] py-8 px-7 mb-8 mt-4">
                <div className="flex justify-between">
                  <h3 className="text-darkPrimary text-xl font-extrabold leading-7">
                    {test.testName}
                  </h3>
                  <p className="text-base">
                    <span className="text-primary">Category:</span>
                    {test.category}
                  </p>
                </div>
                <p className="text-[#231F2099] text-base py-[15px]">
                  No of Questions:{" "}
                  <span className="text-darkPrimary font-extrabold">5</span>
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
                      <span className="text-black">{test.updatedAt}</span>
                    </p>
                  </div>
                  <div className="flex gap-[10px] items-center text-primary">
                    <FaRegEdit className="cursor-pointer" />
                    <RiDeleteBin5Fill className="cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
            <Link
              to="/instructor-dashboard/create-test"
              className="bg-primary text-2xl rounded-lg text-white py-3 px-[38px] font-medium font-rubik"
            >
              Add Test
            </Link>
          </section>
        )}
      </div>
    </section>
  );
};

export default ManageTest;
