import React from "react";
import { aboutUs, aboutUsTwo } from "../constants/data";
import { motion } from "framer-motion";
const AboutUs = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
        duration: 0.3,
        type: "spring",
      },
    },
  };

  const itemdisplay = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      duration: 2,
      type: "spring",
    },
  };
  return (
    <>
      <section className="bg-light">
        <div className="container pt-[55px] pb-[84px]">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="text-secondary text-2xl font-bold text-center"
          >
            WHY CHOOSE US
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="text-center font-bold text-[30px] sm:text-[40px] pt-6 pb-[90px]"
          >
            Revolutionize your exams <br /> with ease
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col lg:flex-row justify-center gap-[60px]"
          >
            {aboutUs.map((item, index) => (
              <motion.div
                variants={itemdisplay}
                className="bg-white shadow-cardShadow rounded-[17px] relative h-[226px] w-full lg:w-[302px] flex flex-col justify-center p-[30px]"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute -top-[16%] -left-[5%]"
                />
                <h4 className="text-primary text-xl font-bold text-[24px]">
                  {item.title}
                </h4>
                <p className="text-base">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-primary">
        <div className="container pt-[113px] pb-[109px]">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="text-center font-bold text-[30px] sm:text-[40px] pt-6 pb-[90px] text-white"
          >
            Revolutionize your exams <br /> with ease
          </motion.p>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col lg:flex-row justify-center gap-[60px]"
          >
            {aboutUsTwo.map((item, index) => (
              <motion.div
                variants={itemdisplay}
                className="bg-white shadow-cardShadow rounded-[17px] relative h-[226px] w-full lg:w-[302px] flex flex-col justify-center p-[30px]"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute -top-[16%] -left-[5%]"
                />
                <h4 className="text-primary text-xl font-bold text-[24px]">
                  {item.title}
                </h4>
                <p className="text-base">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
