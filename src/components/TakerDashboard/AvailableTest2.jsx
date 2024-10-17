import React from 'react'
import { Link } from "react-router-dom";
import { availableTest2, availableTestTwo } from "../../constants/data";

const AvailableTest2 = () => {
  return (
    <section className="font-fustat sm:pl-[73px] pr-4 pb-52">
      <div className="flex gap-24  lg:gap-[429px] items-baseline ">
        <h1 className="font-extrabold text-[24px] mt-16  pb-11 ">
          Basic Electronics Test
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
      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 my-10 ">
        {/* <div className="flex gap-0 lg:gap-[315px] "> */}
        <div className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
          Basic Electronics
        </div>
        {/* </div> */}

        <p className="py-6 pl-4 ">
          This online assessment test your understanding of Basics Electronics{" "}
        </p>
        <div className="grid lg:flex text-sm lg:gap-20 pl-4 pb-11 ">
          {availableTest2.map((link, index) => (
            <div key={index} className="gap-2 flex">
              <img src={link.icon} alt="" className="wful" />
              <div className="flex gap-2">
                {/* <div className="text-[#00000099]">{link.word1}</div> */}
                <div>{link.word2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" pl-10 pb-5">
        <div className="grid gap-3">
          {availableTestTwo.map((test, index) => (
            <div key={index} className="flex gap-2">
              <img src={test.icon} alt="" className="gap-10" />
              <p>{test.title}</p>
              <p className="font-bold text-primary">{test.status}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="py-6 font-extrabold text-[16px] underline ">
        Important Notice:
      </p>
      <ul className="list-inside list-disc pl-10 text-dark py-6  ">
        <li>Stable internet connection required</li>
        <li>Do not refresh the page</li>
        <li>Read questions carefully</li>
      </ul>
      
        <div className="grid place-items-center ">
          <Link to="/">
            <button className="bg-primary text-white font-extrabold rounded-2xl w-40 h-14">
              Start Test
            </button>
          </Link>
        </div>
    </section>
  );
}

export default AvailableTest2