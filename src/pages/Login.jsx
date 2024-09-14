import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/loginImg.svg";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import { Axios } from "../config";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas";
import Request from "../lib/requests";
import AuthFooter from "../components/AuthFooter";
import useAuthStore from "../store/authStore";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const user = useAuthStore((state) => state.user);
  const initialValues = {
    email: "",
    password: "",
    role: "",
    keepMeSignedIn: false,
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.login, payload);
      console.log(res);
      if (res.data.token) {
        setToken(res.data.token);
        // After setting the token, check the user's role for navigation
        if (user?.role === "testTaker") {
          navigate("/student-dashboard");
        } else if (user?.role === "testCreator") {
          navigate("/instructor-dashboard");
        }
      }
      else{
        toast.error(res.message);
      }
    } catch (error) {
     toast.error(error?.response.data.message);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <>
      <Navbar />
      <section className="font-fustat bg-light">
        <div className="grid lg:grid-cols-[30%_30%] justify-center pt-[180px] pb-[100px]">
          <div>
            <img
              src={loginImg}
              alt="loginImg"
              className="hidden lg:block w-full h-full object-cover"
            />
          </div>
          <form
            className="bg-white px-5 sm:px-[58px] lg:px-[30px] xl:px-[58px] pt-[38px]"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl lg:text-xl font-bold text-center mb-8">
              Login to your account
            </h2>

            <InputField
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("email")}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("password")}
            />
            <div className="flex justify-between mb-4">
              <div>
                <input
                  id="remember"
                  type="checkbox"
                  name="keepMeSignedIn"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.keepMeSignedIn}
                />
                <label
                  htmlFor="remember"
                  className="text-base text-[#231F20CC] ml-1 cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-primary font-semibold"
              >
                Forgot Password
              </Link>
            </div>
            <div className="flex flex-col mb-4 w-full">
              <label
                htmlFor="role"
                className="text-base font-extrabold text-[#231F20CC]"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                value={values.role}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("role")}
                className={`border rounded-[10px] w-full py-3 px-[10px] border-[#231F204F] outline-none ${
                  getError("role") ? "border border-red-500" : ""
                }`}
              >
                <option value="">Select</option>
                <option value="testTaker">Test-Taker</option>
                <option value="testCreator">Test-Creator</option>
              </select>
              {getError("role") && (
                <p className="text-red-500 text-sm font-medium">
                  {getError("role")}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="disabled:opacity-75 disabled:cursor-not-allowed bg-primary hover:bg-[#0b304f] text-white font-inter text-base w-full py-[18px] font-light rounded-[10px] mb-4"
            >
              LOGIN
            </button>

            <p className="text-base text-[#231F20CC] font-normal mb-[100px] lg:mb-8">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
        <AuthFooter />
      </section>
    </>
  );
};

export default Login;
