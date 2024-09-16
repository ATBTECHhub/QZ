import useAuthStore from "../../store/authStore";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Widget from "../Widget";
import {
  creatorQuickLinks,
  creatorUpcomingTests,
  recentlyCreatedTests,
  tests,
} from "../../constants/data";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";

const InstructorBase = () => {
  const user = useAuthStore((state) => state.user);
  // Chart data
  const data = {
    labels: ["Tests awaiting", "Tests completed", "In Progress"],
    datasets: [
      {
        data: [13, 28, 7],
        backgroundColor: ["#104573", "#008000B2", "#F3B855"],
        hoverBackgroundColor: ["#0D3D66", "#006B00", "#DAA647"],
        borderWidth: 0,
      },
    ],
  };

  // Chart options
  const options = {
    cutout: "60%",
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
  };

  return (
    <section className="pl-[54px] py-[59px] pr-[100px]">
      {/* <p>{user}</p> */}
      <h1 className="text-xl test-darkPrimary">Welcome Back, Adejare</h1>
      <div className="flex items-center bg-white py-2 px-5 rounded-[23px] gap-2">
        <IoIosSearch />
        <input type="search" className="outline-none bg-transparent" />
      </div>

      <div className="pb-[30px] pt-4 flex gap-[47px] items-center">
        <p className="flex items-center gap-[10px]">
          <Link
            to=""
            className="w-[42px] h-[42px] rounded-full text-white bg-primary items-center justify-center flex"
          >
            <FaPlus />
          </Link>
          <span className=" font-extrabold text-xl">Create a User</span>
        </p>
        <p className="flex items-center gap-[10px]">
          <Link
            to=""
            className="w-[42px] h-[42px] rounded-full text-white bg-secondary items-center justify-center flex"
          >
            <FaPlus />
          </Link>
          <span className=" font-extrabold text-xl">Create a Test</span>
        </p>
      </div>
      <h2 className="text-xl font-extrabold leading-7">Summary Widget</h2>
      <Widget />
      <div className="py-4 grid lg:grid-cols-[60%_40%] gap-5">
        <div className="py-6 pl-6 pr-16 w-[643x] bg-white border rounded-lg shadow-md text-xs">
          <div className="flex justify-between items-center pb-4 border-b">
            <h2 className="text-base font-extrabold">Test Created</h2>
            <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-lg hover:bg-blue-100">
              View all Created Tests
            </button>
          </div>

          <table className="w-full mt-4">
            <thead>
              <tr className="text-left border-b text-[#00000099]">
                <th className="pb-2">No</th>
                <th className="pb-2">Exam Title</th>
                <th className="pb-2">Due Date</th>
                <th className="pb-2">Duration</th>
                <th className="pb-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test) => (
                <tr key={test.no} className="border-b">
                  <td className="py-2">{test.no}</td>
                  <td className="py-2">{test.title}</td>
                  <td className="py-2">{test.dueDate}</td>
                  <td className="py-2">{test.duration}</td>
                  <td className="py-2">
                    <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-lg hover:bg-blue-100">
                      Edit Test
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-md w-96">
          <h2 className="text-base font-extrabold mb-6 leading-[22px]">
            Summary Chart
          </h2>
          <div className="flex items-center">
            <div className="!w-fl">
              <Doughnut data={data} options={options} className="w-full" />
            </div>
            <div className="ml-6">
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 rounded-full bg-[#104573] inline-block mr-2"></span>
                <span className="text-sm mr-2 font-medium">13</span>
                <span className="text-black text-xs">Tests awaiting</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 rounded-full bg-[#008000B2] inline-block mr-2"></span>
                <span className="text-sm mr-2 font-medium">28</span>
                <span className="text-black text-xs">Tests completed</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 rounded-full bg-[#F3B855] inline-block mr-2"></span>
                <span className="text-sm mr-2 font-medium">07</span>
                <span className="text-black text-xs">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="grid lg:grid-cols-[60%_40%] gap-6">
        <div className="grid gap-8">
          {/* Recently Created Tests */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">
              Recently Created Tests
            </h2>
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Exam Title</th>
                  <th>Date created</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {recentlyCreatedTests.map((test) => (
                  <tr key={test.id}>
                    <td>{test.id}</td>
                    <td>{test.title}</td>
                    <td>{test.dateCreated}</td>
                    <td>
                      <button className="text-blue-500">
                        <FaRegEdit />
                      </button>
                    </td>
                    <td>
                      <button className="text-red-500">
                        <RiDeleteBin5Fill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Upcoming Tests */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Tests</h2>
            <table className="w-full table-auto text-left">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Exam Title</th>
                  <th>Scheduled Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {creatorUpcomingTests.map((test) => (
                  <tr key={test.id}>
                    <td>{test.id}</td>
                    <td>{test.title}</td>
                    <td>{test.scheduledDate}</td>
                    <td>
                      <button className="text-blue-500">
                        <FaRegEdit />
                      </button>
                    </td>
                    <td>
                      <button className="text-red-500">
                        <RiDeleteBin5Fill />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-3 gap-4">
            {creatorQuickLinks.map((link, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-[#10357366] rounded-[15px]"
              >
                {/* <div className="text-4xl text-blue-500 mb-2">{link.icon}</div> */}
                <img src={link.icon} alt="" />
                <Link to="/" className="text-sm font-medium">
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default InstructorBase;
