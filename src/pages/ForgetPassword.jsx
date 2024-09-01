import padlock from "../assets/padlock.svg";
import Navbar from "../components/Navbar";

const ForgetPassword = () => {
  return (
    <section className=" font-fustat bg-[#f2f1ed]">
      <div>
        <Navbar />
      </div>
      <div className=" mt- gap-1  container">
        <div className="grid lg:grid-cols-[40%_40%] container justify-center items-center  m-10 ">
          <img
            src={padlock}
            alt="padlock"
            className=" items-center hidden lg:block bg-white h-[347px] w-[498px]"
          />

          <div className="grid items-center  justify-center bg-white h-[347px]">
            <div className="w-full max-w-md p-4 bg-white ">
              <h2 className="text-2xl font-bold  text-center mb-8">
                Forgot Password
              </h2>
              <form className="">
                <div className="mb-4 ">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email address
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 bg-[#FAF7ED]  "
                    placeholder="your@email.com"
                  />
                </div>
                <div className="flex items-center  justify-center mt-8">
                  <button
                    className="bg-[#104573] hover:bg-[#0b304f] text-white font-bold py-2 px-4 rounded "
                    type="submit"
                  >
                    RESET
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex text-[13px] lg:gap-[452px] gap-10 mt-16 mb-16 font-fustat max-h-none lg:h-16 container ">
          <h6>
            QZ Platform - Licensed by the National Authority of Technology
            Development, Nigeria.
          </h6>
          <div className="flex gap-4 lg:gap-20">
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
