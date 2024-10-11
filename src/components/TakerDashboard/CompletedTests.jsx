import React from 'react'
import { Link } from "react-router-dom";
import { completedTest } from "../../constants/data";

const CompletedTests = () => {
  return (
    <section className="font-fustat sm:pl-[73px] pr-4 ">
      <div className="flex gap-20  lg:gap-[615px] items-baseline ">
        <h1 className="font-extrabold text-[24px] mt-16  pb-11 ">
          Completed Tests
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

      {/* PROGRAMMING */}

      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 mb-6 ">
        <div className="flex gap-0 lg:gap-[315px] ">
          <div className="bg-primary text-white h12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Basic Programming Foundation
          </div>
          <div className=" h-8 gap-2 justify-between items-center pt-3">
            <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100">
              View Result
            </button>
          </div>
        </div>

        <p className="py-6 pl-4 ">
          This online assessment test your understanding of Basic Programming
          Foundation.
        </p>
        <div className="grid lg:flex text-sm lg:gap-20 pl-4 pb-11 ">
          {completedTest.map((link, index) => (
            <div key={index} className="gap-2 flex">
              <img src={link.icon} alt="" className="wful" />
              <div className="flex gap-2">
                <div className="text-[#00000099]">{link.word1}</div>
                <div>{link.word2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NETWORKING */}
      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 mb-20 ">
        <div className="flex gap-0 lg:gap-[315px]  ">
          <div className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Networking Basics
          </div>
          <div className="flex h-8 gap-2 justify-between items-center pt-3">
            <Link to="/networking-test">
              <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100">
                View Result
              </button>
            </Link>
          </div>
        </div>

        <p className="py-6 pl-4 ">
          This online assessment test your understanding of networking Basics.
        </p>
        <div className="grid lg:flex text-sm lg:gap-20 pl-4 pb-11 ">
          {completedTest.map((link, index) => (
            <div key={index} className="gap-2 flex">
              <img src={link.icon} alt="" className="wful" />
              <div className="flex gap-2">
                <div className="text-[#00000099]">{link.word1}</div>
                <div>{link.word2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompletedTests