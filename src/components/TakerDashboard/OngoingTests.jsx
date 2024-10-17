import React from 'react'
import { Link } from 'react-router-dom';


const OngoingTests = () => {
  return (
    <section className="font-fustat sm:pl-[73px] pr-4 pb-20">
      <div className="flex gap-24  lg:gap-[615px] items-baseline ">
        <h1 className="font-extrabold text-[24px] mt-16  pb-11 ">
          Available Tests
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

      <div className="flex gap-24  lg:gap-[400px] items-baseline ">
        <p>
          <span className="text-[#FF0000]">Time Remaining:</span> 45mins
        </p>
        <p className="font-bold">
          <span className="text-[#555253] ">Questions Answered:</span>
          8/25
        </p>
      </div>

      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 my-10 ">
        <div className="flex gap-0 lg:gap-[315px] items-baseline ">
          <p className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Test: Basic Electronics
          </p>
          <p>[ Timer : 12 : 34 ]</p>
        </div>
        <div className=" pl-8 ">
          <p className="text-primary py-6">Question 8 Of 25</p>

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
          <p className="py-6 ">
            What is the function of a resistor in an Electric Oven?
          </p>
          <div className="grid gap-1 font-light text-[#231F2099] pb-3">
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                for="energy"
                data-ripple-dark="true"
              >
                <input
                  name="question"
                  type="radio"
                  className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                  id="energy"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label
                className="text-slate-600 cursor-pointer text-sm"
                for="energy"
              >
                To store electrical energy.
              </label>
            </div>

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                for="current"
                data-ripple-dark="true"
              >
                <input
                  name="question"
                  type="radio"
                  className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                  id="current"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label
                className="text-slate-600 cursor-pointer text-sm"
                for="current"
              >
                To allow the flow of electric current.
              </label>
            </div>

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                for="flow"
                data-ripple-dark="true"
              >
                <input
                  name="question"
                  type="radio"
                  className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                  id="flow"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label
                className="text-slate-600 cursor-pointer text-sm"
                for="flow"
              >
                To restrict or limit the flow of electric current.
              </label>
            </div>

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                for="signal"
                data-ripple-dark="true"
              >
                <input
                  name="question"
                  type="radio"
                  className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                  id="signal"
                />
                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </label>
              <label
                className="text-slate-600 cursor-pointer text-sm"
                for="signal"
              >
                To amplify the electronic signal.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-6 mt-12 pl12 mb-4">
        <Link to="/">
          <button className="text-[#10357366] font-extrabold border border-primary mr-4 py-3 px-[10px] rounded-2xl w-28  hover:bg-blue-100">
            Previous
          </button>
        </Link>
        <Link to="/">
          <button className="text-[#10357366] font-extrabold border border-primary py-3 px-[10px] rounded-2xl w-28  hover:bg-blue-100">
            Next
          </button>
        </Link>
      </div>

      <div className="flex justify-end">
        <Link to="/taker-dashboard/test-submitted">
          <button className="text-[#FFFFFF] bg-submit font-extrabold border py-1 px-2 rounded-xl w-20  hover:bg-primary">
            SUBMIT
          </button>
        </Link>
      </div>
    </section>
  );
}

export default OngoingTests