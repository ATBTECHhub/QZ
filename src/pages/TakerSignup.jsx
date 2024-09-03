import signupTakerImg from "../assets/signupTakerImg.svg";
import Navbar from "../components/Navbar";

const takerSignup = () => {
  return (
    <section className="font-fustat">
      <div>
        <Navbar />
      </div>
      <div className=" bg-[#f2f1ed] pt-24 lg:pt-10 container ">
        <div className=" grid lg:grid-cols-[30%_30%] container  justify-center items-center mt-2">
          <img
            src={signupTakerImg}
            alt="signupTakerImg"
            className=" items-center hidden lg:block h-[597px]"
          />

          <div className="grid items-center justify-center h-[420px] w-[277px] lg:w-[400px] bg-white">
            <div className="w-full max-w-md  ">
              <h2 className="text-2xl font-bold text-center mb-2">
                Register to take assessment
              </h2>
              <form className="ml-2 w-[260px] lg:w-[350px]">
                <div className="flex grid-2 gap-2 ">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      First Name
                    </label>
                    <input
                      className=" border rounded w-full py-2 px-3 bg-light"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      className=" border rounded w-full py-2 px-3 bg-light"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email address
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 bg-light"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-light mb-3 "
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>

                <div className="flex items-center  justify-center ">
                  <button
                    className="bg-[#104573] hover:bg-[#0b304f] text-white font-bold py-2 px-14 rounded-lg"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex text-[13px] lg:gap-[452px] gap-10 mt-3 mb-1 max-h-none lg:h-16 ">
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

export default takerSignup;
