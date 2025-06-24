import { IoIosSearch } from 'react-icons/io'
import TakerWidget from '../TakerWidget';
import { Doughnut } from 'react-chartjs-2';
import {
  completedTests,
  takerQuickLinks,
  takerTests,
  takerUpcomingTests,
  testProgress,
} from "../../constants/data";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import useAuthStore from "../../store/authStore";


const TakerBase = () => {
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
    <section className="pl-[54px] py-[59px] pr-[70px]">
      <div className="grid md:flex  justify-between gap-3 lg:gap-64 ">
        <h1 className="text-xl test-darkPrimary">Welcome Back, {user}</h1>
        <div className="flex gap-3 lg:gap-14">
          <div className="flex items-center bg-white py-2 px-5 rounded-[23px] gap-2">
            <IoIosSearch />
            <input type="search" className="outline-none bg-transparent" />
          </div>
          <Link to="/taker-dashboard/view-profile">
            <svg
              width="18"
              height=""
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00548 8.72962C11.3049 8.72962 13.2835 6.80745 13.2835 4.30437C13.2835 1.83204 11.2939 0 9.00548 0C6.71657 0 4.72748 1.87219 4.72748 4.32487C4.72748 6.80745 6.71703 8.72962 9.00548 8.72962ZM2.2889 18H15.7221C17.4013 18 18 17.5498 18 16.6686C18 14.0856 14.5457 10.5219 9.00548 10.5219C3.4548 10.5219 0 14.0856 0 16.6686C0 17.5498 0.599148 18 2.2889 18Z"
                fill="#231F20"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* SUMMARY WIDGE */}
      <h2 className="text-xl font-extrabold leading-7">Summary Widget</h2>
      <TakerWidget />
      <div className="py-4 grid lg:grid-cols-[60%_40%] gap-5">
        {/* TEST CREATED */}
        <div className="py-6 pl-6 pr-16 bg-white border rounded-[12px] text-xs">
          <div className="flex justify-between items-center pb-4 border-b">
            <h2 className="text-base font-extrabold">Test Created</h2>
          </div>

          <table className="w-full mt-4">
            <thead>
              <tr className="text-left border-b text-[#00000099]">
                <th className="pb-2">No</th>
                <th className="pb-2">Exam Title</th>
                <th className="pb-2">Due Date</th>
                <th className="pb-2">Duration</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Result</th>
              </tr>
            </thead>
            <tbody>
              {takerTests.map((test) => (
                <tr key={test.no} className="border-b">
                  <td className="py-2">{test.no}</td>
                  <td className="py-2">{test.title}</td>
                  <td className="py-2">{test.dueDate}</td>
                  <td className="py-2">{test.duration}</td>
                  <td className={test.statusColor}>{test.status}</td>
                  <td className="py-2">{test.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SUMMARY CHART */}
        <div className="p-6 bg-white border rounded-[12px] shadow-tableShadow w-96">
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
                <span className="text-sm mr-2 font-medium">05</span>
                <span className="text-black text-xs">Tests completed</span>
              </div>
              <div className="flex items-center mb-2">
                <span className="w-4 h-4 rounded-full bg-[#F3B855] inline-block mr-2"></span>
                <span className="text-sm mr-2 font-medium">02</span>
                <span className="text-black text-xs">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="grid lg:grid-cols-[60%_40%] gap-6 rounded-[12px] text-xs">
        <div className="grid gap-5">
          {/* Upcoming Tests */}
          <div className="bg-white rounded-lg shadow-tableShadow p-6">
            <h2 className="text-base font-extrabold mb-2 border-b">
              Upcoming Tests
            </h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-left border-b text-[#00000099]">
                  <th>No</th>
                  <th>Exam Title</th>
                  <th>Due Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {takerUpcomingTests.map((test) => (
                  <tr key={test.id} className="border-b">
                    <td className="py-2">{test.id}</td>
                    <td className="py-2">{test.title}</td>
                    <td className="py-2">{test.dueDate}</td>
                    <th className="py-2">{test.duration}</th>
                    <button className="text-[#FFFFFF] bg-primary font-extrabold border border-primary py-1 px-3 rounded-lg hover:bg-blue-100">
                      Take Test
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Completed Tests */}
          <div className="bg-white rounded-[12px] p-6 shadow-tableShadow">
            <h2 className="text-base font-extrabold border-b leading-[22px] mb-2">
              Completed Tests
            </h2>
            <table className="w-full">
              <thead>
                <tr className="text-left border-b text-[#00000099]">
                  <th>No</th>
                  <th>Exam Title</th>
                  <th>Status</th>
                  <th>Date taken</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {completedTests.map((test) => (
                  <tr key={test.id} className="border-b">
                    <td className="py-2">{test.id}</td>
                    <td className="py-2">{test.title}</td>
                    <td className={test.statusColor}>{test.status}</td>
                    <td className="py-2">{test.dateTaken}</td>
                    <td className="py-2"> {test.result}</td>
                    <td className="py-2">
                      <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-lg hover:bg-blue-100">
                        View Result
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-base font-extrabold mb-8">Quick Links</h2>
          <div className="grid grid-cols-2 gap-4">
            {takerQuickLinks.map((link, index) => (
              <div key={index} className="rounded-[15px] h-[95px]">
                <div className="bg-[#10357366] flex justify-center py-4 rounded-t-[15px]">
                  <img src={link.icon} alt="" className="w-ful" />
                </div>
                <Link
                  to="/"
                  className="text-[11px] bg-[#E6E6E9] text-center block p-[5px] rounded-br-[15px] hover:text-primary"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test in Progress */}
      <section className="py-6 pl-6 pr-16 bg-white border rounded-[12px] text-xs my-9 w-[80%]">
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-base font-extrabold">Test in Progress</h2>
        </div>

        <table className="w-full mt-4">
          <thead>
            <tr className="text-left border-b text-[#00000099]">
              <th className="pb-2">No</th>
              <th className="pb-2">Exam Title</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Date </th>
            </tr>
          </thead>
          <tbody>
            {testProgress.map((test, index) => (
              <tr key={test.id} className="border-b">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{test.title}</td>
                <td className={test.statusColor}>{test.status}</td>
                <td className="py-2">{test.date}</td>
                <td className="containerr flex">
                  <div className="progress-bar">
                    <div className="progress-bar-fill"></div>
                  </div>
                  <div className="progress-label ">20%</div>
                </td>
                <td className="py-2">
                  <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-lg hover:bg-blue-100">
                    View Result
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
}

export default TakerBase