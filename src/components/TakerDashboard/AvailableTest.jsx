import { Link } from "react-router-dom";
import { availableTest } from "../../constants/data";

const AvailableTest = () => {
  return (
    <section className="font-fustat sm:pl-[73px] pr-4 ">
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

      {/* NETWORKING */}
      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 ">
        <div className="flex gap-0 lg:gap-[315px]  ">
          <div className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Networking Basics
          </div>
          <div className="flex h-8 gap-2 justify-between items-center pt-3">
            <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100 flex gap-2 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <circle cx="10.5" cy="10.5" r="9.25" stroke="#104573" />
                <path
                  d="M10.0251 10.337H10.9751V14.017H10.0251V10.337Z"
                  fill="#346580"
                  fill-opacity="0.7"
                  stroke="#104573"
                />
                <path
                  d="M10.975 7.76998C10.975 8.03232 10.7624 8.24498 10.5 8.24498C10.2377 8.24498 10.025 8.03232 10.025 7.76998C10.025 7.50765 10.2377 7.29498 10.5 7.29498C10.7624 7.29498 10.975 7.50765 10.975 7.76998Z"
                  fill="#346580"
                  fill-opacity="0.7"
                  stroke="#104573"
                />
              </svg>{" "}
              Info
            </button>
            <Link to="/networking-test">
              <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100">
                Take Test
              </button>
            </Link>
          </div>
        </div>

        <p className="py-6 pl-4 ">
          This online assessment test your understanding of networking Basics.
        </p>
        <div className="grid lg:flex text-sm lg:gap-20 pl-4 pb-11 ">
          {availableTest.map((link, index) => (
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

      {/* ELECTRONICS */}

      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 my-10 ">
        <div className="flex gap-0 lg:gap-[315px] ">
          <div className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Basic Electronics
          </div>
          <div className="flex h-8 gap-2 justify-between items-center pt-3">
            <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100 flex gap-2 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <circle cx="10.5" cy="10.5" r="9.25" stroke="#104573" />
                <path
                  d="M10.0251 10.337H10.9751V14.017H10.0251V10.337Z"
                  fill="#346580"
                  fill-opacity="0.7"
                  stroke="#104573"
                />
                <path
                  d="M10.975 7.76998C10.975 8.03232 10.7624 8.24498 10.5 8.24498C10.2377 8.24498 10.025 8.03232 10.025 7.76998C10.025 7.50765 10.2377 7.29498 10.5 7.29498C10.7624 7.29498 10.975 7.50765 10.975 7.76998Z"
                  fill="#346580"
                  fill-opacity="0.7"
                  stroke="#104573"
                />
              </svg>{" "}
              Info
            </button>
            <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100">
              Take Test
            </button>
          </div>
        </div>

        <p className="py-6 pl-4 ">
          This online assessment test your understanding of Basice Electronics
        </p>
        <div className="grid lg:flex text-sm lg:gap-20 pl-4 pb-11 ">
          {availableTest.map((link, index) => (
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

      {/* PROGRAMMING */}

      <div className="bg-[#FFFFFF]  rounded-md   lg:pr-10 ">
        <div className="flex gap-0 lg:gap-[315px] ">
          <div className="bg-primary text-white h-12 w-72 text-wrap justify-center pl-5 pt-4 rounded-tr-xl ">
            Basic Programming Foundation
          </div>
          <div className="flex h-8 gap-2 justify-between items-center pt-3">
            <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100 flex gap-2 items-center">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <circle cx="10.5" cy="10.5" r="9.25" stroke="#104573" />
                <path
                  d="M10.0251 10.337H10.9751V14.017H10.0251V10.337Z"
                  fill="#346580"
                  fill-opacity="0.7"
                  stroke="#104573"
                />
                <path
                  d="M10.975 7.76998C10.975 8.03232 10.7624 8.24498 10.5 8.24498C10.2377 8.24498 10.025 8.03232 10.025 7.76998C10.025 7.50765 10.2377 7.29498 10.5 7.29498C10.7624 7.29498 10.975 7.50765 10.975 7.76998Z"
                  fill="#346580"
                  fill-opacity="0.7"
                  stroke="#104573"
                />
              </svg>{" "}
              Info
            </button>
            <button className="text-primary font-extrabold border border-primary py-1 px-3 rounded-3xl hover:bg-blue-100">
              Take Test
            </button>
          </div>
        </div>

        <p className="py-6 pl-4 ">
          This online assessment test your understanding of Basic Programming
          Foundation.
        </p>
        <div className="grid lg:flex text-sm lg:gap-20 pl-4 pb-11 ">
          {availableTest.map((link, index) => (
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

      <div className="gap-6 mt-12 mb-40">
        <Link to="/taker-dashboard/available-test">
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
    </section>
  );
}

export default AvailableTest