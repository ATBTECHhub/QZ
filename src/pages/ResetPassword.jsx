import Navbar from "../components/Navbar";
import ResetPasswrdImg from "../assets/resetPasswordImg.svg";
import InputField from "../components/InputField";
import { ResetPasswordSchema } from "../schemas";
import { useFormik } from "formik";
import { Axios } from "../config";
import { toast } from "react-toastify";
import Request from "../lib/requests";
import { useState } from "react";
import AuthFooter from "../components/AuthFooter";
import Modal from "../components/Modal";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams();
  const cleanToken = token?.replace(/^:/, ""); // Remove leading colon if present
  console.log("Token from URL:", cleanToken);
  const [isOpen, setIsOpen] = useState(false);
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(
        `/auths/change-password/${cleanToken}`,
        payload
      );
      console.log(res);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
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
    validationSchema: ResetPasswordSchema,
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
              src={ResetPasswrdImg}
              alt="ResetPasswrdImg"
              className="w-full h-full object-cover"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center bg-white px-5 sm:px-[58px] lg:px-[30px] xl:px-[58px] pt-[38px]"
          >
            <h2 className="text-2xl font-bold mb-8">Change Password</h2>
            <InputField
              label="New Password"
              name="newPassword"
              type="password"
              placeholder="Enter here"
              value={values.newPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("newPassword")}
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Enter here"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("confirmPassword")}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary mb-[100px] mt-7 text-white font-bold py-2 px-4 sm:w-[400px] lg:w-full rounded-[10px] disabled:opacity-75 disabled:cursor-not-allowed"
            >
              SAVE
            </button>
          </form>
        </div>

        <AuthFooter />
      </section>
      {isOpen && (
        <Modal
          cta="Log in"
          text="Email and Password sent, password reset successful."
          path="/login"
        />
      )}
    </>
  );
};

export default ResetPassword;
