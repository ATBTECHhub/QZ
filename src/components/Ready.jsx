import React from "react";
import { Link } from "react-router-dom";

const Ready = () => {
  return (
    <section>
      <div className="container pt-[40px] pb-[88px]">
        <div className="text-center font-bold">
          <h4 className="text-[32px] sm:text-[40px] leading-[45px] sm:leading-[56px] text-darkPrimary">
            Ready to get started
          </h4>
          <p className="text-secondary pb-6">
            Join thousand of users who are ready to enhance their learning{" "}
            <br />
            experience using our application
          </p>
          <Link to="/signup">
            <button className="text-base text-darkPrimary bg-[#E6E6E9] rounded-[42px] border-[2px] px-[52px] py-2 border-darkPrimary">
              Start Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ready;
