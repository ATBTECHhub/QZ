import React from "react";
import { features } from "../constants/data";

const Features = () => {
  return (
    <section className="bg-primaryBg py-[36px] flex items-center">
      <div className="container flex justify-center gap-[9%] sm:gap-[14%] text-white">
        {features.map((item, index) => (
          <div key={index} className="border-l pl-5 sm:pl-[32px] border-[#F3B85599]">
            <h2 className="text-xl sm:text-[32px] font-semibold ">{item.value}</h2>
            <p className="text-base sm:text-xl font-normal">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
