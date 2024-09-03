import signupCreatorImg from "../assets/signupCreatorImg.svg";
import Navbar from "../components/Navbar";
const creatorSignup = () => {
  return (
    <section className="font-fustat">
      <div>
        <Navbar />
      </div>
      <div className=" bg-light  gap-1 pt-32 container">
        <div className="grid lg:grid-cols-[30%_30%] justify-center items-center container  ">
          <img
            src={signupCreatorImg}
            alt="signupCreatorImg"
            className=" items-center hidden lg:block "
          />
          <div className="grid items-center justify-center h-[400px] w-[398px] bg-white ">
            <div className="w-full max-w-md p-4 ">
              <h2 className="text-2xl font-bold text-center mb-8">
                Register to Create Assessment
              </h2>
              <form className="ml-2 w-[260px] lg:w-[350px]">
                <div className="flex grid-2 gap-2">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      First Name
                    </label>
                    <input
                      className=" border rounded w-full py-2 px-3 bg-light "
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Last Name
                    </label>
                    <input
                      className=" border rounded w-full py-2 px-3 bg-light "
                      placeholder="Enter Last Name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    id="email"
                    type="email"
                  >
                    Email address
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 bg-light "
                    placeholder="your@email.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="flex items-center  justify-center container">
                  <button
                    className="bg-[#104573] hover:bg-[#0b304f] text-white font-bold py-2 px-[55px] rounded-lg "
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex text-[13px] lg:gap-[350px] gap-10 mt-16 mb-16 font-fustat max-h-none lg:h-16 container  ">
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

export default creatorSignup;
