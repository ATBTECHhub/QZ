import React, { useState } from "react";
import { testimonials } from "../constants/data";

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(2);

  const reorderTestimonials = () => {
    // Get the index of the active testimonial
    const activeIndex = testimonials.findIndex(
      (testimonial) => testimonial.id === activeTestimonial
    );

    // Reorder the array to bring the active testimonial to the middle
    if (activeIndex !== 1) {
      const reorderedTestimonials = [...testimonials];
      const [selected] = reorderedTestimonials.splice(activeIndex, 1);
      reorderedTestimonials.splice(1, 0, selected);
      return reorderedTestimonials;
    }
    return testimonials;
  };

  const reorderedTestimonials = reorderTestimonials();

  return (
    <section className="bg-white pt-[48px] pb-[70px] font-bold font-fustat border-b border-[#E6E6E9]">
      <div className="container text-center">
        <h3 className="text-secondary text-[24px]">OUR TESTIMONIALS</h3>
        <p className="text-[30px] sm:text-[40px] mb-[56px]">
          What people say about us
        </p>
        <div className="flex flex-col items-center">
          <div className="flex space-x-[15px] md:space-x-[30px] items-center">
            {reorderedTestimonials.map((testimonial) => (
              <img
                key={testimonial.id}
                src={testimonial.image}
                alt={testimonial.name}
                className={`w-[50px] h-[50px] md:w-[80px] md:h-[80px] rounded-full cursor-pointer transition-transform duration-300 
              ${
                activeTestimonial === testimonial.id
                  ? "border-4 border-blue-500 transform scale-110 !w-[80px] !h-[80px] md:!w-[120px] md:!h-[120px]"
                  : ""
              }
            `}
                onClick={() => setActiveTestimonial(testimonial.id)}
              />
            ))}
          </div>

          {/* Review Content */}
          <div className="mt-7 text-center">
            <h3 className="text-[24px] font-bold text-darkPrimary">
              {
                reorderedTestimonials.find((t) => t.id === activeTestimonial)
                  .name
              }
            </h3>
            <p className="text-base font-extrabold text-[#231F2099]">
              {
                reorderedTestimonials.find((t) => t.id === activeTestimonial)
                  .position
              }
            </p>
            <div className="relative">
              <p className="mt-[14px] md:mt-[26px] text-[#231F20CC] font-bold text-xl md:text-[24px] sm:w-[444px] leading-[34px]">
                {
                  reorderedTestimonials.find((t) => t.id === activeTestimonial)
                    .review
                }
              </p>
              <span className="hidden md:block text-[250px] text-black opacity-[10%] absolute top-[-130%] right-[100%]">
                “
              </span>
              <span className="hidden md:block text-[250px] text-black opacity-[10%] absolute top-[-15%] right-[-24%]">
                ”
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
