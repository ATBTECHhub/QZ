import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Request from "../../lib/requests";
import { toast } from "react-toastify";
import { Axios } from "../../config";
import DateFormatter from "../../utils/DateFormatter";
const ManageUser = () => {
  const [activeTab, setActiveTab] = useState("Manage User");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const tabs = ["Dashboard", "Create User", "Manage User"];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Dashboard") {
      navigate("/instructor-dashboard");
    } else if (tab === "Create User") {
      navigate("/instructor-dashboard/create-user");
    }
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const res = await Axios.get(Request.createUser);
      console.log(res);
      setUsers(res.data);
    } catch (error) {
      if (
        error.response.data.message !=
        "No test takers found for this Test Creator"
      ) {
        toast.error(
          error?.message || "An error occurred, please try again later."
        );
      }
    } finally {
      setLoading(false);
    }
  };
  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return -1;
      if (b.name.toLowerCase().startsWith(searchTerm.toLowerCase())) return 1;
      return 0;
    });
  const handleDeleteUser = async (userId) => {
    try {
      const res = await Axios.delete(Request.updateUser(userId));
      if (res.data.message === "User removed successfully") {
        toast.success("Test deleted successfully");
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
      }
    } catch (error) {
      toast.error(
        "Error deleting test: " + error.response?.data?.message ||
          "Unknown error"
      );
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
            {/* Searchbox */}
            <div className="flex items-center gap-[40px] mb-[70px] ">
              <div className="flex items-center border border-darkPrimary pr-5 py-[14px] pl-[14px] rounded-[5px]">
                <label htmlFor="search-box">
                  <IoIosSearch className="text-[28px] text-[#808080B2]" />
                </label>
                <input
                  type="text"
                  id="search-box"
                  placeholder="Emmanuel"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent font-medium text-base w-[450px] outline-none text-darkPrimary ml-2"
                />
                <IoFilter className="text-[28px] text-[#808080B2]" />
              </div>
              <Link
                to="/instructor-dashboard/create-user"
                className="py-3 px-[43px] border border-primary bg-white rounded-[8px] text-2xl font-medium"
              >
                Add User
              </Link>
            </div>
            {loading && (
              <p className="text-2xl text-dark mt-5 font-semibold">
                Loading...
              </p>
            )}
            {!loading && users.length === 0 && (
              <p className="text-xl text-dark mt-5 font-semibold">
                You haven't added any user
              </p>
            )}
            <div>
              {filteredUsers.map((user, i) => (
                <div
                  key={i}
                  className="pb-10 px-5 pt-[17px] bg-white rounded-[12px] mb-5"
                >
                  <h2 className="text-base font-extrabold font-fustat text-primary">
                    {user.name}
                  </h2>
                  <p className="pt-[18px] pb-[11px] text-base text-darkPrimary">
                    Email address: <span>{user.email}</span>
                  </p>
                  <div className="border-t border-[#E6E6E9] flex items-center justify-between pt-[10px]">
                    <div className="flex gap-5">
                      <p className="flex gap-1 text-[#00000099]">
                        <FaRegCalendarAlt className="text-xl text-[#346580] opacity-[0.7]" />
                        Date Created
                        <span className="text-black">
                          <DateFormatter date={user.createdAt} />
                        </span>
                      </p>
                      <p className="flex gap-1 text-[#00000099]">
                        <MdAccessTime className="text-xl text-[#346580] opacity-[0.7]" />
                        Last Updated{" "}
                        <span className="text-black">
                          {" "}
                          <DateFormatter date={user.updatedAt} />
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-[10px] items-center text-primary">
                      <Link
                        to={`/instructor-dashboard/create-user/${user._id}`}
                      >
                        <FaRegEdit className="cursor-pointer" />
                      </Link>
                      <RiDeleteBin5Fill
                        onClick={() => handleDeleteUser(user._id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
              {users.length > 0 && (
                <div className="text-2xl font-medium font-rubik flex gap-[39px] items-center pt-5">
                  <button className="text-white bg-primary py-3 rounded-lg w-[187px] whitespace-nowrap">
                    Assign Test
                  </button>
                  <button className="text-primary py-3 rounded-lg border border-btnDashboard w-[187px] whitespace-nowrap">
                    Change Status
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageUser;
