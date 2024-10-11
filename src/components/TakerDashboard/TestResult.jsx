import React from 'react'
import { Link } from 'react-router-dom';
import { testReslt } from '../../constants/data';

const TestResult = () => {
  return (
    <section className="font-fustat sm:pl-[73px] pr-4 pb-20">
      <div className="flex gap-4  lg:gap-[510px] items-baseline ">
        <h1 className="font-extrabold text-[16px] lg:text-[24px] mt-16  pb-11 ">
          Basic Programming Foundation
        </h1>
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
      <p className="text-[#231F20CC] font-extrabold">
        Date Taken: 23rd August, 2024
      </p>
      <p className="text-primary font-extrabold text-[20px] py-8">
        Overall Performance
      </p>
      <div className=" bgcover bgcenter hfull w1 bgtestResultBg pb-5">
        <div className="grid gap-3">
          {testReslt.map((test, index) => (
            <div key={index} className="flex gap-2">
              <img src={test.icon} alt="" className="gap-10" />
              <p>{test.title}</p>
              <p className="font-bold text-primary">{test.status}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-primary font-extrabold text-[20px] py-8">
        Question by Question Analysis
      </p>

      <div className="bg-white py-5 px-5 overflow-x-auto">
        <p className="font-extrabold text-[20px] py-3 ">Analysis</p>
        <table className="table-auto ">
          <thead className="bg-[#F3B85599]"></thead>
          <tbody>
            <tr className="bg-[#F3B85599]">
              <td className="px-4 py-2 border">No</td>
              <td className="px-4 py-2 border">Question</td>
              <td className="px-4 py-2 border">Question Type</td>
              <td className="px-4 py-2 border">Your Answer</td>
              <td className="px-4 py-2 border">Correct Answer</td>
              <td className="px-4 py-2 border">Score</td>
              <td className="px-4 py-2 border">Feedback</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border">1.</td>
              <td className="px-4 py-2 border">Which is a data type</td>
              <td className="px-4 py-2 border">MCQ</td>
              <td className="px-4 py-2 border">Int</td>
              <td className="px-4 py-2 border">Int</td>
              <td className="px-4 py-2 border">2/2</td>
              <td className="px-4 py-2 border">Well done</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border">2.</td>
              <td className="px-4 py-2 border">
                IP stands for internet protocol
              </td>
              <td className="px-4 py-2 border">True/False</td>
              <td className="px-4 py-2 border">No</td>
              <td className="px-4 py-2 border">Yes</td>
              <td className="px-4 py-2 border">0/2</td>
              <td className="px-4 py-2 border">Review the IP model</td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border">3.</td>
              <td className="px-4 py-2 border">
                IP stands for internet protocol
              </td>
              <td className="px-4 py-2 border">Essay</td>
              <td className="px-4 py-2 border">
                Yes and it is an integral part of programming
              </td>
              <td className="px-4 py-2 border">
                Yes and it is an integral part of programming
              </td>
              <td className="px-4 py-2 border">2/2</td>
              <td className="px-4 py-2 border">
                Go back to your Networking basics
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-4 py-2 border">4.</td>
              <td className="px-4 py-2 border">
                What is the function of a resistor in an Electric Oven?
              </td>
              <td className="px-4 py-2 border">MCQ3</td>
              <td className="px-4 py-2 border">Option B</td>
              <td className="px-4 py-2 border">Option C</td>
              <td className="px-4 py-2 border">0/2</td>
              <td className="px-4 py-2 border">
                Go back toyour Networking basics
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end py-12">
        <Link to="/taker-dashboard/performance-analysis">
          <button className="text-[#FFFFFF] bg-primary font-extrabold border py-1 px-2 rounded-xl w-20  hover:bg-primary">
            SUBMIT
          </button>
        </Link>
      </div>
    </section>
  );
}

export default TestResult