import { Link } from "react-router-dom";
import loginImg from "../assets/loginImg.svg";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <section className="font-fustat">
      <div>
        <Navbar />
      </div>
      <div className=" bg-light pt-20  container">
        <div className="grid lg:grid-cols-[30%_30%] container  justify-center items-center mt-16 ">
          <img src={loginImg} alt="loginImg" className="hidden lg:block" />

          <div className="grid items-center justify-center h-[390px] bg-white">
            <div className="w-full max-w-md p-4 bg-white">
              <h2 className="text-3xl font-bold font-rubik text-center mb-2">
                Login to your account
              </h2>
              <form className="h-[2">
                <div className="mb-4 ">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email address
                  </label>
                  <input
                    className=" border rounded w-full py-2 px-3 bg-light "
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="rounded w-full py-2 px-3 bg-light mb-3"
                    id="password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
                <div className="mb-4 grid ">
                  <label className="block  text-sm font-bold mb-2">Role</label>
                  <select
                    id="list"
                    name="list"
                    className="bg-light shadow appearance-none border rounded w-full py-2 px-3 "
                  >
                    <option value="select">Select</option>
                    <option value="test-taker">Test-Taker</option>
                    <option value="test-creatoe">Test-Creator</option>
                  </select>
                </div>

                <div className="grid ">
                  <button
                    className="bg-[#104573] hover:bg-[#0b304f] text-white font-bold py-2 px-4 rounded-lg "
                    type="submit"
                  >
                    LOGIN
                  </button>
                  <Link to="forgetpassword">
                    <button className="mt-2 ">Forgot Password?</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex text-[13px] lg:gap-[350px] gap-10 container mt-16 mb-16 font-fustat max-h-none lg:h-16 ">
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
      </div>
    </section>
  );
};

export default Login;
