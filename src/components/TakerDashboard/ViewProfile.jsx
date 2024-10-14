import React from 'react'
import { Link } from 'react-router-dom';
import pencilIcon from '../../assets/pencilIcon.svg'
import profilePicture from '../../assets/profilePicture.svg'
import line2 from '../../assets/line2.svg'
import { profile } from '../../constants/data';

const ViewProfile = () => {
  return (
    <section className="font-fustat sm:pl-[73px] pr-4 pb-20">
      <div className="flex gap-8 items-baseline ">
        <h1 className="font-extrabold text-[16px] lg:text-[24px] mt-16  pb-11 ">
          Basic Programming Foundation
        </h1>
        <Link to="/taker-dashboard/edit-profile">
          <img src={pencilIcon} alt="pencilIcon" />
        </Link>
      </div>
      <div className=" bg-profileCircleBg bg-blend-overlay  bg-no-repeat my-4">
        <img
          className=" rounded-full pt-3 pl-3 "
          src={profilePicture}
          alt="profilePicture"
        />
      </div>

      <div className="grid lg:flex ">
        <div className="w[300px]">
          <p className="text-primary font-bold text-[32px] py-8">
            Balogun Adejare
          </p>
          <div className="flex items-center gap-2 lg:gap-5">
            <p className="lg:text-[20px]">Human Resources Manager</p>
            <button className="text-primary text-[20px] text-center font-extrabold lg:w-32 lg:h-9 bg-[#D9D9D9]">
              <span>•</span> Test Taker
            </button>
          </div>
          <img className=" py-10" src={line2} alt="line2" />

          <div className="flex text-[20px]  gap-5">
            <p>balogunadejare20@gmail.com</p>
            <svg
              width="3"
              height="27"
              viewBox="0 0 3 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 0V27" stroke="#231F20" stroke-width="2" />
            </svg>
            <p>Female</p>
          </div>
          <div className="flex text-[20px] pt-6 gap-5">
            <p>+234 908 678 1178</p>
            <svg
              width="3"
              height="27"
              viewBox="0 0 3 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.5 0V27" stroke="#231F20" stroke-width="2" />
            </svg>
            <p>Abeokuta</p>
          </div>
          <img className=" py-10" src={line2} alt="line2" />
        </div>

        {/* MORE */}
        <div className="lg:pl-24 ">
          <p className="text-primary font-bold text-[32px] py-8">More</p>
          <div className="grid gap-6 ">
            {profile.map((test, index) => (
              <div key={index} className="flex gap-2">
                <img src={test.icon} alt="" className="gap-10" />
                <p className="font-bold text-[24px] text-[#706f6f]">
                  {test.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default ViewProfile