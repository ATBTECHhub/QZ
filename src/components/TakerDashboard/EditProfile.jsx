import React from 'react'
import profilePicture from "../../assets/profilePicture.svg";
import cameraIcon from "../../assets/cameraIcon.svg";
import { editProfile } from '../../constants/data';

const EditProfile = () => {
  return (
    <section className="font-fustat px-[73px] py-20 bg-white ">
      <div className="grid">
        <div className="flex items-baseline">
          <img
            className=" w-14 h-14 my-10"
            src={profilePicture}
            alt="profilePicture"
          />
          <img src={cameraIcon} alt="cameraIcon" />
        </div>
        <p className="font-extrabold text-{24px} ">Personal Details</p>
        <div className="gridgap-3">
          {editProfile.map((test, index) => (
            <div key={index} className="grid gap-2">
              <p>{test.title}</p>
              <p className="font-bold text-primary">{test.status}</p>
              <img src={test.icon} alt="" className="" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid flex-col mb-4">
        <label className="text-lg mb-2" for="gender">
          Gender:
        </label>
        <select
          id="gender"
          className="  text-sm font-bold text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </section>
  );
}

export default EditProfile