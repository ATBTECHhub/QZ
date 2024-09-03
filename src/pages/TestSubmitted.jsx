import submittedIcon from "../assets/submittedIcon.svg";
import Navbar from "../components/Navbar";

const SubmittedTest = () => {
  return (
    <sectio className="font-fustat continer bg-light w-[1440px]">
      <Navbar />

      <div className=" bg-[#f2f1ed]  container">
        <div className="container max-w-md p-4 bg-white w-[270px] lg:w-[717px] h-[350px] mt-[60px] mb-[60px] items-center justify-center ">
          <img
            src={submittedIcon}
            alt="submittedIcon"
            className="justify-center items-center mt-16 ml-[170px] "
          />
          <div className="flex justify-center items-center text-center w[310px] h[68px] mb-6 mt-7" >
            <p className="text-center" >Congratulations, you have successfully submitted your test.</p>
          </div>

          <div className="flex items-center  justify-center gap-6 container">
            <button className=" bg-white hover:bg-[#b8c5d0] text-[#103773] text-center font-bold py-2 px-2 rounded-lg h-10 w-40  ">
              Go Home
            </button>
            <button className="bg-[#104573] hover:bg-[#0b3d68] text-white text-center font-bold py-2 px-2 rounded-lg h-10 w-40  ">
              View Result
            </button>
          </div>
        </div>
      </div>
      <div className="flex text-[13px] lg:gap-[452px] gap-10 mt16 mb16 font-fustat max-h-none lg:h-16 bg-[#f2f1ed] container ">
        <h6>
          QZ Platform - Licensed by the National Authority of Technology
          Development, Nigeria.
        </h6>
        <div className="flex gap-4 lg:gap-20">
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </sectio>
  );
};

export default SubmittedTest;
