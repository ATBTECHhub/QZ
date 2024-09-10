import { Link } from "react-router-dom";
import loginImg from "../assets/loginImg.svg";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import { Axios } from "../config";
import { useFormik } from "formik";
import { LoginSchema } from "../schemas";
import Request from "../lib/requests";
import AuthFooter from "../components/AuthFooter";

const Login = () => {
   const initialValues = {
     email: "",
     password: "",
     role: "",
   };
   const onSubmit = async (payload, actions) => {
     try {
       const res = await Axios.post(Request.login, payload);
       console.log(res);
     } catch (error) {
       console.log(error);
     }
     await new Promise(() => setTimeout(resolve, 1000));
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
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("email")}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("password")}
            />
            <div className="mb-4 grid ">
              <label className="block  text-sm font-bold mb-2">Role</label>
              <select
                id="list"
                name="list"
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("role")}
                className="   border rounded-[10px] w-full py-3 px-[10px] border-[#231F204F] outline-none  "
              >
                <option value=""></option>
                <option value="test-taker">Test-Taker</option>
                <option value="test-creatoe">Test-Creator</option>
              </select>
            </div>

            <button className="bg-primary hover:bg-[#0b304f] text-white font-inter text-base w-full py-[18px] font-light rounded-[10px] mb-4">
              LOGIN
            </button>

            <Link to="/forget-password" className="text-primary font-semibold">
              Forgot Password?
            </Link>
          </form>
        </div>
        <AuthFooter />
      </section>
    </>
  );
};

export default Login;
