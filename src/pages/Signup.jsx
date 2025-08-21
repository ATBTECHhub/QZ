import { Link } from "react-router-dom";
import signupCreator from "../assets/signupCreator.svg";
import signupTaker from "../assets/signupTaker.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Signup = () => {
  const HandleSignup = async() => {
    
  }

  const Test = ({ img, heading, instruction, route, name }) => {
    return (
      <section>
        <h2 className="text-[30px] sm:text-[40px] font-extrabold mt-20 text-darkPrimary">
          {name}
        </h2>
        <div className="flex flex-col lg:flex-row items-start mt-[67px] gap-[79px] lg:items-center">
          <img src={img} alt="user taking a test" />
          <div className="flex flex-col gap-[16px]">
            <h1 className="text-[32px] font-bold text-secondary">{heading}</h1>
            <p className="text-[22px] sm:text-[32px] text-[#231F20CC]">{instruction}</p>
            <Link
              to={route}
              className="text-base font-inter font-semibold bg-secondary rounded-[10px] text-white text-center w-[224px] py-[10px]"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    );
  };
  return (
    <>
      <Navbar />
      <section className="container bg-white pt-[180px] pb-[67px] font-rubik px-10">
        <h1 className="text-[40px] font-extrabold text-center text-darkPrimary">
          Register for free
        </h1>
        <p className="text-[30px] leading-[47px] sm:text-[40px] font-extrabold text-secondary mt-8 sm:mt-16 text-center">
          Unlock Powerful Features and elevate Your Experience
        </p>
        <Test
          name="Test Taker"
          img={signupTaker}
          route="/test-taker-signup"
          heading="Ready to ace Your test?"
          instruction="Click here to sign up if your instructor or administrator has assigned
          you a test. join us now and start your jurney to success! "
        />
        <Test
          name="Test Creator"
          img={signupCreator}
          route="/test-creator-signup"
          heading="Ready to Transform your assessments?"
          instruction="click here to join our platform and start creating powerful, effective tests today. Sign up now and elevate your teaching experience!"
        />
      </section>
      <Footer />
    </>
  );
};

export default Signup;
