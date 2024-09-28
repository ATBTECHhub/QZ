import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateUserSchema } from "../../schemas";
import { useFormik } from "formik";
import Request from "../../lib/requests";
import TextField from "../TextField";
import { Axios } from "../../config";
import { toast } from "react-toastify";

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
    name: "",
    email: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.createUser, payload);
      console.log(res);
      if(res.data.message === "User Successfully Created"){
        toast(res.data.message)
      }
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
                label="Full Name"
                name="name"
                type="text"
                placeholder="Enter Full Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("name")}
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
                <button
                type="submit"
                  disabled={isSubmitting}
                  className="disabled:opacity-75 disabled:cursor-not-allowed text-white font-medium text-2xl font-rubik bg-primary leading-[28px] px-[39px] py-3 rounded-[8px] mb-3"
                >
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
