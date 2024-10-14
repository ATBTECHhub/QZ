import Navbar from "../components/Navbar";
import AuthFooter from "../components/AuthFooter";
import InputField from "../components/InputField";
import Request from "../lib/requests";
import { Axios } from "../config";
import { toast } from "react-toastify";
import { WaitlistSchema } from "../schemas";
import { useFormik } from "formik";
import padlock from "../assets/padlock.svg";
import Modal from "../components/Modal";
import { useState } from "react";

const ForgetPassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const initialValues = {
    email: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.forgotPassword, payload);
      console.log(res);
      if (res.data.message === "Reset password link sent") {
        setIsOpen(true);
      }
    } catch (error) {
      toast.error(error.message);
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
    validationSchema: WaitlistSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <>
      <Navbar />
      <section className="bg-[#FAF7ED99]">
        <div className="grid lg:grid-cols-[30%_30%] sm:justify-center pt-[180px] pb-[100px]">
          <div className="bg-white hidden lg:block ">
            <img
              src={padlock}
              alt="padlock"
              className="w-full h-full object-cover"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center bg-white px-5 sm:px-[58px] lg:px-[30px] xl:px-[58px] pt-[38px]"
          >
            <h2 className="text-2xl lg:text-xl font-bold mb-8">
              Forgot Password
            </h2>
            <InputField
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("email")}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary mb-[100px] mt-7 text-white font-bold py-2 px-4 sm:w-[400px] lg:w-full rounded-[10px] disabled:opacity-75 disabled:cursor-not-allowed"
            >
              RESET
            </button>
          </form>
        </div>
        <AuthFooter />
      </section>
      {isOpen && (
        <Modal cta="Back" text="Check your mail box for next step" path="/" />
      )}
    </>
  );
};

export default ForgetPassword;
