
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
const ManageGroup = () => {
  return (
    <section className="pl-[64px] pt-[120px] pb-[70px] pr-[70px]">
      <div>
        <h1 className="text-[32px] font-semibold mb-[29px]">Manage Group</h1>
        <div className="bg-white shadow-formShadow pb-[60px] rounded-[12px]">
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
                <HiOutlineQuestionMarkCircle  className="text-xl text-[#346580] opacity-[0.7]" />
                Member count<span className="text-black">10</span>
              </p>
              <div className="flex gap-[10px] items-center text-primary pl-5">
                <FaRegEdit className="cursor-pointer" />
                <RiDeleteBin5Fill className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageGroup;
