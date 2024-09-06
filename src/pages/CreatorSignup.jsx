import { Link } from "react-router-dom";
import signupCreatorImg from "../assets/signupCreatorImg.svg";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import AuthFooter from "../components/AuthFooter";
const creatorSignup = () => {
  return (
    <>
      <Navbar />
      <section className="font-fustat bg-[#FAF7ED99]">
        <div className="grid lg:grid-cols-[30%_30%] justify-center pt-[180px] pb-[100px]">
          <div>
            <img
              src={signupCreatorImg}
              alt="smiling lady wearing glasses"
              className="hidden lg:block w-full h-full object-cover"
            />
          </div>
          <form className="bg-white px-5 sm:px-[58px] lg:px-[30px] xl:px-[58px] pt-[38px] ">
            <h2 className="text-2xl lg:text-xl font-bold text-center mb-8">
              Register to Create Assessment
            </h2>
            <div className="flex flex-col sm:flex-row gap-[18px] items-start sm:items-center">
              <InputField
                label="First Name"
                name=""
                type="text"
                placeholder="Enter First Name"
              />
              <InputField
                label="Last Name"
                name=""
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            <InputField
              label="Email address"
              name=""
              type="email"
              placeholder="Enter email"
            />
            <InputField
              label="Password"
              name=""
              type="password"
              placeholder="Enter password"
            />
            <button className="bg-primary hover:bg-[#0b304f] text-white font-inter text-base w-full py-[18px] font-light rounded-[10px] mb-4">
              REGISTER
            </button>
            <p className="text-base text-[#231F20CC] font-normal mb-[100px] lg:mb-8">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold">
                Sign in
              </Link>
            </p>
          </form>
        </div>
        <AuthFooter />
      </section>
    </>
  );
};

export default creatorSignup;
