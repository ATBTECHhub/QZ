import { Link } from "react-router-dom";
import submittedIcon from "../assets/submittedIcon.svg";
import Navbar from "../components/Navbar";


const SubmittedTest = () => {
  return (
    <sectio className="font-fustat bg-light container ">
      <Navbar />

      <div className=" bg-light pt-20 container">
        <div className="container max-w-md p-94 bg-white w-[270px] lg:w-[717px] h-[350px]  items-center justify-center ">
          <img
            src={submittedIcon}
            alt="submittedIcon"
            className="justify-center items-center mt-16 ml-24 lg:ml-44 "
          />
          <div className="flex justify-center items-center text-center w[310px] h[68px] mb-6 mt-7 container">
            <p className="text-center">
              Congratulations, you have successfully submitted your test.
            </p>
          </div>

          <div className="flex items-center  justify-center gap-6 container">
            <Link to="/taker-dashboard">
              <button className=" bg-white hover:bg-[#b8c5d0] text-[#103773] text-center font-bold py-2 px-2 border-2 rounded-lg h-10 w-40  ">
                Go Home
              </button>
            </Link>
            <Link to="view result">
              <button className="bg-[#104573] hover:bg-[#0b3d68] text-white text-center font-bold py-2 px-2 rounded-lg h-10 w-40  ">
                View Result
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex text-[13px] pl-10 lg:gap-[350px] gap-10 pt-10 font-fustat lg:h-24 bg-light container ">
        <h6>
          QZ Platform - Licensed by the National Authority of Technology
          Development, Nigeria.
        </h6>
        <div className="flex gap-4 lg:gap-20">
          <Link to="policy">
            <p>Privacy policy</p>
          </Link>
          <Link to="terms and conditions">
            <p>Terms and conditions</p>
          </Link>
        </div>
      </div>
    </sectio>
  );
};

export default SubmittedTest;
