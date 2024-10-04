import React from 'react'
import { Link } from 'react-router-dom';

const Perfomance = () => {
  return (
    <section className="font-fustat sm:pl-[73px] pr-4 pb-20">
      <div className="flex gap-24  lg:gap-[615px] items-baseline  ">
        <h1 className="font-extrabold text-[24px] mt-16  pb-11 ">
          James Jacob
        </h1>
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
      </div>
      {/* Test Taker Details */}
      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 my-10 ">
        <div className="flex gap-0 lg:gap-[315px] items-centerlg:items-baseline pb-8 ">
          <p className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Test Taker Details
          </p>
          <p>
            <span className="text-primary">Categories:</span> Networking
          </p>
        </div>
        <div className=" pl-8 gap-10 ">
          <svg
            width="817"
            height="2"
            viewBox="0 0 817 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H817"
              stroke="#808080"
              stroke-opacity="0.7"
              stroke-width="0.5"
            />
          </svg>
          <ul className="list-inside list-disc  text-dark py-6 gap-x-10 ">
            <li>
              Name: <span className="text-primary">John Doe</span>
            </li>
            <li>
              Email: <span className="text-primary">Johndoe@gmail.com</span>
            </li>
            <li>
              Date of Test:{" "}
              <span className="text-primary">August 23rd, 2024</span>
            </li>
            <li>
              Time Taken: <span className="text-primary">45 minutes</span>
            </li>
            <li>
              Score: <span className="text-primary">85/100</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Overall Performance */}
      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 my-10 ">
        <div className=" gap-0 lg:gap-[315px] items-baseline pb-8 ">
          <p className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Overall Performance
          </p>
        </div>
        <div className=" pl-8 gap-10 ">
          <svg
            width="817"
            height="2"
            viewBox="0 0 817 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H817"
              stroke="#808080"
              stroke-opacity="0.7"
              stroke-width="0.5"
            />
          </svg>
          <ul className="list-inside list-disc  text-dark py-6">
            <li>
              Result: <span className="text-primary">Passed</span>
            </li>
            <li>
              Percentage: <span className="text-primary">85%</span>
            </li>
            <li>
              Passing Score:
              <span className="text-primary">70%</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Percentage summary  */}
      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 my-10 ">
        <div className="gap-0 lg:gap-[315px] items-baseline pb-8 ">
          <p className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Percentage summary
          </p>
        </div>
        <div className=" pl-8 gap-10 ">
          <svg
            width="817"
            height="2"
            viewBox="0 0 817 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H817"
              stroke="#808080"
              stroke-opacity="0.7"
              stroke-width="0.5"
            />
          </svg>
          <ul className="list-inside list-decimal  text-dark py-6  ">
            <li>
              Correct answers: <span className="text-primary"> 22</span>
            </li>
            <li>
              Incorrect answers: <span className="text-primary">3</span>
            </li>
            <li>
              Unanswered: <span className="text-primary">0</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Section Breakdown */}
      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 my-10 ">
        <div className=" gap-0 lg:gap-[315px] items-baseline pb-8 ">
          <p className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Section Breakdown
          </p>
        </div>
        <div className=" pl-8 gap-10 ">
          <svg
            width="817"
            height="2"
            viewBox="0 0 817 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H817"
              stroke="#808080"
              stroke-opacity="0.7"
              stroke-width="0.5"
            />
          </svg>
          <p className="font-bold pt-3 ">
            Section1: Introduction to Networking
          </p>
          <ul className="list-inside list-disc  text-dark py-6  ">
            <li>Questions: 1-5</li>
            <li>Correct answers: 4/5</li>
            <li>Score: 8/10</li>
            <li>Feedback: Great Understanding of the basics</li>
          </ul>
        </div>
        <div className=" pl-8 gap-10 ">
          <svg
            width="817"
            height="2"
            viewBox="0 0 817 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H817"
              stroke="#808080"
              stroke-opacity="0.7"
              stroke-width="0.5"
            />
          </svg>
          <p className="font-bold pt-3 ">Section 2: Network Protocols</p>
          <ul className="list-inside list-disc  text-dark py-6  ">
            <li>Questions: 6-10</li>
            <li>Correct answers: 5/5</li>
            <li>Score: 10/10</li>
            <li>Feedback: Excellent Knowledge of network Protocols</li>
          </ul>
        </div>
        <div className=" pl-8 gap-10 ">
          <svg
            width="817"
            height="2"
            viewBox="0 0 817 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H817"
              stroke="#808080"
              stroke-opacity="0.7"
              stroke-width="0.5"
            />
          </svg>
          <p className="font-bold pt-3 ">Section 3: Network Topologies</p>
          <ul className="list-inside list-disc  text-dark py-6  ">
            <li>Questions: 11-15</li>
            <li>Correct answers: 3/5</li>
            <li>Score: 6/10</li>
            <li>
              Feedback:Consider revisiting this section for better understanding
            </li>
          </ul>
        </div>
        <div className=" pl-8 gap-10 ">
          <svg
            width="817"
            height="2"
            viewBox="0 0 817 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1H817"
              stroke="#808080"
              stroke-opacity="0.7"
              stroke-width="0.5"
            />
          </svg>
          <p className="font-bold pt-3 ">Section 4: Network Security</p>
          <ul className="list-inside list-disc  text-dark py-6  ">
            <li>Questions: 16-20</li>
            <li>Correct answers: 5/5</li>
            <li>Score: 10/10</li>
            <li>Feedback:Strong graps on network security concepts</li>
          </ul>
        </div>
      </div>
      <div className="gap-6 mt-12 mb-4">
        <Link to="/">
          <button className="text-primary font-extrabold border border-primary mr-4 py-3 px-[10px] rounded-2xl w-28  hover:bg-blue-100">
            Back
          </button>
        </Link>
        <Link to="/">
          <button className=" font-extrabold border border-primary py-3 px-[10px] rounded-2xl w-40  hover:bg-blue-100">
            Generate PDF
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Perfomance