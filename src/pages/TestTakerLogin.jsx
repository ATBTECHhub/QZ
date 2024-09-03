import Navbar from "../components/Navbar";

const TestTakerLogin = () => {
  return (
    <sectio className="font-fustat container ">
      <Navbar />

      <div className="grid bg-light items-center justify-center pt-20 ml-20 container ">
        <div className="wfull max-w-md p-4 bg-white w-[270px] lg:w-[717px] h-[450px] mt-[60px] mb-[60px]">
          <h1 className="text-[16px] font-bold text-center mb-4 mt-4 ">
            Login to take Test
          </h1>
          <h2 className="text-[20px] font-bold font-bolding text-center mb-10 text-[#104573] ">
            Use your access code to take your test
          </h2>

          <form className="">
            <div className="mb-9">
              <label className="block text-[#231F20CC] text-sm font-bold mb-2">
                Access Code
              </label>
              <input
                className=" border rounded w-full py-2 px-3 bg-light"
                placeholder="Enter Code"
              />
            </div>

            <div className="mb-9">
              <label className="block text-[#231F20CC] text-sm font-bold mb-2">
                Email address
              </label>
              <input
                className=" border rounded w-full py-2 px-3 bg-light"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex items-center  justify-center container">
              <button
                className="bg-[#104573] hover:bg-[#0b3d68] text-white font-bold py-2 px-14 rounded-lg  "
                type="log in"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex text-[13px] lg:gap-[452px] font-fustat max-h-none lg:h-16 bg-light container ">
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

export default TestTakerLogin;
