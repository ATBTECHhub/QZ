import React from 'react'
import Navbar from '../components/Navbar';
import ResetPasswrdImg from '../assets/resetPasswordImg.svg'
import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import { ResetPasswordSchema } from '../schemas';
import { useFormik } from 'formik';
import { Axios } from '../config';
import { toast } from 'react-toastify';

const ResetPassword = () => {
  const initialValues = {
    newPassword: "",
    confirmPassword: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.resetPassword, payload);
      console.log(res);
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
      isSubmitting,
    errors,

   } = useFormik({
     initialValues,
     validationSchema: ResetPasswordSchema,
     onSubmit,
   });
    const getError = (key) => {
      return  errors[key];
    };

  return (
    <section className=" font-fustat bg-[#f2f1ed]">
      <Navbar />
      <div className=" pt-24 gap-1 container">
        <div className="grid lg:grid-cols-[40%_40%] container justify-center items-center  m-10 ">
          <img
            src={ResetPasswrdImg}
            alt="ResetPasswrdImg"
            className=" items-center hidden lg:block bg-white h-[347px] w-[498px]"
          />
          <div className="grid items-center  justify-center bg-white h-[347px]">
            <div className="w-full max-w-md p-4 bg-white ">
              <h2 className="text-2xl font-bold  text-center mb-8">
                Change Password
              </h2>
              <form className="">
                <InputField
                  label="New Password"
                  name="New Password"
                  type="New Password"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError("password")}
                />
                <InputField
                  label="Confirm Password"
                  name="Confirm Password"
                  type="Confirm Password"
                  placeholder="Enter password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError("password")}
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="disabled:opacity-75 disabled:cursor-not-allowed bg-primary hover:bg-[#0b304f] text-white font-inter text-base w-full py-[18px] font-light rounded-[10px] mb-4"
                >
                  SAVE
                </button>
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
}

export default ResetPassword