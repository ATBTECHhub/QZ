import { Link } from "react-router-dom";
import signupCreator from "../assets/signupCreator.svg";
import signupTaker from "../assets/signupTaker.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <section className=" container">
      <div>
        <Navbar />
      </div>
      <div className="font-rubik container text-center">
        <h1 className=" text-4xl font-extrabold mt-20 ">Register for free</h1>
        <p className=" text-4xl font-extrabold text-[#F3B855] mt-16 ">
          Unlock Powerful Features and elevate Your Experience
        </p>
        <p className=" text-4xl font-extrabold mt-20 text-left "> Test Taker</p>
      </div>
      <div className="grid lg:flex container mt-16  ">
        <img src={signupTaker} alt="signupTaker" className="h-64 w-64" />

        <div className=" ml-20 ">
          <h1 className="text-3xl font-bold text-[#F3B855]">
            Ready to ace Your test?
          </h1>
          <p className="text-3xl mt-12 mb-10">
            Click here to sign up if your instructor or administrator has
            assigned you a test. join us now and start your jurney to success!
          </p>
          <Link
            to="/takersignup"
            className=" font-inter  bg-[#F3B855] text-center container rounded-[10px] text-black px-8 py-2 mt-36 "
          >
            Get Started
          </Link>
        </div>
      </div>
      <p className=" text-4xl font-extrabold ml-16 mt-20 text-left ">
        {" "}
        Test Creator
      </p>

      <div className="grid lg:flex container mt-16  ">
        <img src={signupCreator} alt="signupcreator" className="h-64 w-64" />

        <div className=" ml-20  ">
          <h1 className="text-3xl font-bold text-[#F3B855]">
            Ready to Transform your assessments?
          </h1>
          <p className="text-3xl mt-10 mb-10">
            click here to join our platform and start creating powerful,
            effective tests today. Sign up now and elevate your teaching
            experience!
          </p>
          <Link
            to="/creatorsignup"
            className="   font-inter  bg-[#F3B855] text-center container rounded-[10px] text-black px-8 py-2 mt-36 "
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="mt-36">
        <Footer />
      </div>
    </section>
  );
};

export default Signup;
