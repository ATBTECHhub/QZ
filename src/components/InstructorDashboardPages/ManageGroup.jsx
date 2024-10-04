import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Axios } from "../../config";
import Request from "../../lib/requests";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ManageGroup = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
   const [searchTerm, setSearchTerm] = useState("");
  const getGroups = async () => {
    try {
      const res = await Axios.get(Request.createGroup);
      console.log(res);
      setGroups(res.data);
    } catch (error) {
      toast.error(
        error?.message || "An error occurred, please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  const filteredGroups = groups
    .filter((group) =>
      group.groupName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a.groupName.toLowerCase().startsWith(searchTerm.toLowerCase())) return -1;
      if (b.groupName.toLowerCase().startsWith(searchTerm.toLowerCase())) return 1;
      return 0;
    });
  useEffect(() => {
    getGroups();
  }, []);
  return (
    <section className="pl-[64px] pt-[120px] pb-[70px] pr-[70px]">
      <div>
        <h1 className="text-[32px] font-semibold mb-[29px]">Manage Group</h1>
        {/* Searchbox */}
        <div className="flex items-center gap-[40px] mb-[70px] ">
          <div className="flex items-center border border-darkPrimary pr-5 py-[14px] pl-[14px] rounded-[5px]">
            <label htmlFor="search-box">
              <IoIosSearch className="text-[28px] text-[#808080B2]" />
            </label>
            <input
              type="text"
              id="search-box"
              placeholder="Search group"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent font-medium text-base w-[450px] outline-none text-darkPrimary ml-2"
            />
          </div>
          <Link
            to="/instructor-dashboard/create-user"
            className="whitespace-nowrap py-3 px-[43px] border border-primary bg-white rounded-[8px] text-2xl font-medium"
          >
            Add User
          </Link>
        </div>
        {loading && (
          <p className="text-2xl text-dark mt-5 font-semibold">Loading...</p>
        )}
        {!loading && groups.length === 0 && (
          <p className="text-xl text-dark mt-5 font-semibold">
            You haven't added any groups yet,{" "}
            <Link to="/instructor-dashboard/groups" className="underline">
              Add group
            </Link>
          </p>
        )}
        <div>
          {filteredGroups.map((group, i) => (
            <div className="bg-white mb-5 shadow-formShadow pb-[60px] rounded-[12px]">
              <h2 className="text-base rounded-tr-[20px] font-extrabold text-white bg-primary pl-5 pt-[19px] pb-2 pr-[50px]">
                {group.groupName}
              </h2>
              <div className="pl-[19px] pr-6">
                <p className="text-base pb-[11px] pt-[19px] border-b leading-[22px] border-[#E6E6E9]">
                  {group.groupDescription}
                </p>
                <div className="flex items-center justify-between pr-6 gap-[50px] pt-3">
                  <p className="flex gap-1 text-[#00000099]">
                    <FaRegCalendarAlt className="text-xl text-[#346580] opacity-[0.7]" />
                    STart Date
                    <span className="text-black"> 23rd Aug 2024</span>
                  </p>
                  <p className="flex gap-1 text-[#00000099]">
                    <MdAccessTime className="text-xl text-[#346580] opacity-[0.7]" />
                    End Date<span className="text-black">24th Aug 2024</span>
                  </p>
                  <p className="flex gap-1 text-[#00000099]">
                    <HiOutlineQuestionMarkCircle className="text-xl text-[#346580] opacity-[0.7]" />
                    Member count
                    <span className="text-black">{group.members.length}</span>
                  </p>
                  <div className="flex gap-[10px] items-center text-primary pl-5">
                    <FaRegEdit className="cursor-pointer" />
                    <RiDeleteBin5Fill className="cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bg-white shadow-formShadow pb-[60px] rounded-[12px]">
          <h2 className="text-base rounded-tr-[20px] font-extrabold text-white bg-primary pl-5 pt-[19px] pb-2 pr-[50px]">
            UI/UX ssessment Group
          </h2>
          <div className="pl-[19px] pr-6">
            <p className="text-base pb-[11px] pt-[19px] border-b leading-[22px] border-[#E6E6E9]">
              This group is created to take the basic UI/UX Assessment Test
            </p>
            <div className="flex items-center justify-between pr-6 gap-[50px] pt-3">
              <p className="flex gap-1 text-[#00000099]">
                <FaRegCalendarAlt className="text-xl text-[#346580] opacity-[0.7]" />
                STart Date
                <span className="text-black"> 23rd Aug 2024</span>
              </p>
              <p className="flex gap-1 text-[#00000099]">
                <MdAccessTime className="text-xl text-[#346580] opacity-[0.7]" />
                End Date<span className="text-black">24th Aug 2024</span>
              </p>
              <p className="flex gap-1 text-[#00000099]">
                <HiOutlineQuestionMarkCircle className="text-xl text-[#346580] opacity-[0.7]" />
                Member count<span className="text-black">10</span>
              </p>
              <div className="flex gap-[10px] items-center text-primary pl-5">
                <FaRegEdit className="cursor-pointer" />
                <RiDeleteBin5Fill className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ManageGroup;
