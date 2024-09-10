import { Link } from "react-router-dom";
import signupCreatorImg from "../assets/signupCreatorImg.svg";
import Navbar from "../components/Navbar";
import InputField from "../components/InputField";
import AuthFooter from "../components/AuthFooter";
import { Axios } from "../config";
import Request from "../lib/requests";
import { CreatorSignupSchema } from "../schemas";
import { useFormik } from "formik";
const creatorSignup = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    role: "testcreator",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.creatorSignup, payload);
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
    validationSchema: CreatorSignupSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
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
          <form
            className="bg-white px-5 sm:px-[58px] lg:px-[30px] xl:px-[58px] pt-[38px]"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl lg:text-xl font-bold text-center mb-8">
              Register to Create Assessment
            </h2>
            {/* <div className="flex flex-col sm:flex-row gap-[18px] items-start sm:items-center"> */}
              <InputField
                label="Name"
                name="name"
                type="text"
                placeholder="Enter Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("name")}
              />
              {/* <InputField
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("lastName")}
              /> */}
            {/* </div> */}
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
