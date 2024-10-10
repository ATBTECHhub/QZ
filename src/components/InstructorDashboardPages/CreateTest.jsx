import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TextField from "../TextField";
import { CreateTestSchema } from "../../schemas";
import { useFormik } from "formik";
import Request from "../../lib/requests";
import { Axios } from "../../config";
import Textarea from "../Textarea";
import { toast } from "react-toastify";
import useTestStore from "../../store/testStore";
import { useParams } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const CreateTest = () => {
  const { testId } = useParams();
  const [activeTab, setActiveTab] = useState("Create Test");
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const tabs = ["Dashboard", "Create Test", "Manage Test"];
  const addTestId = useTestStore((state) => state.addTestId);
  
  const [initialValues, setInitialValues] = useState({
    testName: "",
    description: "",
    category: "",
    instructions: "",
    createdBy: user,
  });
  useEffect(() => {
    if (testId) {
      const fetchTestDetails = async () => {
        try {
          const res = await Axios.get(Request.updateTest(testId));
          console.log(res);
          const test = res.data;
          setInitialValues({
            testName: test.testName,
            description: test.description,
            category: test.category,
            instructions: test.instructions,
            createdBy: test.createdBy,
          });
        } catch (error) {
          console.error("Failed to fetch test details", error);
        }
      };
      fetchTestDetails();
    }
  }, [testId]);
  const onSubmit = async (payload, actions) => {
    try {
      let res;
      if (testId) {
        res = await Axios.put(Request.updateTest(testId), payload);
        if (res.data) {
          toast.success("Updated successfully");
            actions.resetForm({
              values: {
                testName: "",
                description: "",
                category: "",
                instructions: "",
                createdBy: "BunmiAdmin",
              },
            });
              navigate("/instructor-dashboard/create-test");
        } else {
          toast.error("Test update failed, try again.");
        }
      } else {
        res = await Axios.post(Request.createTest, payload);
      }
      console.log(res);
      if (res.data.savedTest._id) {
        addTestId(res.data.savedTest._id);
        // console.log("Saved Test ID:", res.data.savedTest._id);
        toast.success("Test saved, redirecting...");
        navigate("/instructor-dashboard/create-test/continue");
      } else {
        toast.error("Failed to save the test. Please try again.");
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
    enableReinitialize: true,
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
    } else if (tab === "Manage Test") {
      navigate("/instructor-dashboard/manage-test");
    }
  };
  return (
    <>
      <section className="pl-[54px] py-[59px]">
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
                name="testName"
                type="text"
                placeholder="Enter Test Name"
                value={values.testName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("testName")}
              />
              <Textarea
                label="Description"
                name="description"
                type="text"
                placeholder="Add Description"
                value={values.description}
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
              <Textarea
                label="Test instruction"
                name="instructions"
                type="text"
                placeholder="Add test instruction which will be shown when test is being taken."
                value={values.instructions}
                onChange={handleChange}
                onBlur={handleBlur}
                error={getError("instructions")}
              />
              <div className="flex items-center gap-[18px]">
                {/* <button
                  type="submit"
                  className="disabled:opacity-75 disabled:cursor-not-allowed px-[43px] py-3 bg-white border-primary border rounded-lg text-2xl font-rubik font-medium"
                  disabled={isSubmitting}
                  >
                  Save
                  </button> */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="disabled:opacity-75 disabled:cursor-not-allowed px-[43px] py-3 text-white bg-primary text-2xl font-rubik font-medium rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default CreateTest;
