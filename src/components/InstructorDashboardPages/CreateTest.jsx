import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../TextField";
import { CreateTestSchema } from "../../schemas";
import { useFormik } from "formik";
import Request from "../../lib/requests";
import { Axios } from "../../config";

const CreateTest = () => {
  const [activeTab, setActiveTab] = useState("Create Test");
  const navigate = useNavigate();
  const tabs = ["Dashboard", "Create Test", "Manage Test"];
  const initialValues = {
    test: "",
    description: "",
    category: "",
    instruction: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.CreateTestSchema, payload);
      console.log(res);
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
    validationSchema: CreateTestSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Dashboard") {
      navigate("/instructor-dashboard");
    } else if (tab === "Manage User") {
      navigate("/instructor-dashboard/manage-test");
    }
  };
  return (
    <div className="pl-[54px] py-[59px]">
      <h1 className="text-2xl font-bold text-darkPrimary">Create Test</h1>
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
      <div className="mt-4">
        {activeTab === "Create Test" && (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Test Name"
              name="test"
              type="text"
              placeholder="Enter Test Name"
              value={values.test}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("test")}
            />
            <TextField
              label="Description"
              name="description"
              type="text"
              placeholder="Add Description"
              value={values.test}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("description")}
            />
            <TextField
              label="Category/Subject"
              name="category"
              type="text"
              placeholder="Enter here"
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("category")}
            />
            <TextField
              label="Test instruction"
              name="instruction"
              type="text"
              placeholder="Add test instruction which will be shown when test is being taken."
              value={values.instruction}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("instruction")}
            />
            <div className="flex items-center gap-[18px]">
              <button className="px-[43px] py-3 bg-white border-primary border rounded-lg text-2xl font-rubik font-medium">
                Save
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="disabled:opacity-75 disabled:cursor-not-allowed px-[43px] py-3 text-white bg-primary text-2xl font-rubik font-medium rounded-lg"
              >
                Create Test
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateTest;
