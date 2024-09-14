import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUserSchema } from "../../schemas";
import { useFormik } from "formik";
import Request from "../../lib/requests";

const CreateUser = () => {
  const [activeTab, setActiveTab] = useState("Create User");
  const navigate = useNavigate();
  const tabs = ["Dashboard", "Create User", "Manage User"];
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Dashboard") {
      navigate("/instructor-dashboard");
    }
    else if (tab === "Manage User") {
      navigate("/instructor-dashboard/manage-user");
    }
  };
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.createUser, payload);
      console.log(res);
      // if (res.data.message === "User registered successfully") {
      //   toast.success("Account created");
      //   navigate("/login");
      // }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
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
    validationSchema: CreateUserSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  const TextField = ({
    label,
    name,
    type,
    placeholder,
    value,
    error,
    onChange,
    onBlur,
  }) => {
    return (
      <div className="bg-white gap-[9px] flex flex-col pl-[23px] pr-[51px] pb-[33px] pt-4 rounded-xl shadow-formShadow mb-[64px]">
        <label
          htmlFor={name}
          className="text-base font-fustat leading-6 text- darkPrimary font-extrabold"
        >
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          className={`border border-[#E6E6E9] px-5 py-3 rounded-[8px] outline-none w-[636px] ${
            error ? "border border-red-500" : ""
          }`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
      </div>
    );
  };

  return (
    <div className="pl-[54px] py-[59px]">
      <div className="flex space-x-4 border-b border-gray-300 mb-[25px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`py-2 px-4 focus:outline-none text-xl font-extrabold ${
              activeTab === tab
                ? "border-b-4 border-primary text-primary"
                : "text-[#346580B2] hover:text-primary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4">
        {activeTab === "Create User" && (
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                label="First Name"
                name="fname"
                type="text"
                placeholder="Enter First Name"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("fname")}
              />
              <TextField
                label="Last Name"
                name="lname"
                type="text"
                placeholder="Enter Last Name"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("lname")}
              />
              <TextField
                label="Email Address"
                name="email"
                type="text"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("email")}
              />
              <div className="flex justify-end">
                <button className="text-white font-medium text-2xl font-rubik bg-primary leading-[28px] px-[39px] py-3 rounded-[8px] mb-3">
                  Create User
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateUser;
