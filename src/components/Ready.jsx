import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Ready = () => {
  return (
    <section>
      <div className="container pt-[40px] pb-[88px]">
        <div className="text-center font-bold">
          <motion.h4
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="text-[32px] sm:text-[40px] leading-[45px] sm:leading-[56px] text-darkPrimary"
          >
            Ready to get started
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="text-secondary pb-6"
          >
            Join thousand of users who are ready to enhance their learning{" "}
            <br />
            experience using our application
          </motion.p>
          <Link to="/signup">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.7 }}
              className="text-base text-darkPrimary bg-[#E6E6E9] rounded-[42px] border-[2px] px-[52px] py-2 border-darkPrimary"
            >
              Start Now
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ready;
