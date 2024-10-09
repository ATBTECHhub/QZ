import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { AdminiterTestSchema } from "../../schemas";
import { toast } from "react-toastify";
import { Axios } from "../../config";
import Request from "../../lib/requests";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
const AdministerTest = () => {
  const [tests, setTests] = useState([]);
  const [recentTests, setRecentTests] = useState([]);
  const [filteredTests, setFilteredTests] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const initialValues = {
    startDate: null,
    endDate: null,
    timeLimit: null,
    passingScore: "",
    randomizeQuestions: false,
    attempts: 1,
  };

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await Axios.get(Request.allTests);
        console.log(response);
        const allTests = response.data;
        const lastFiveTests = allTests.slice(-5).reverse();
        setTests(allTests);
        setRecentTests(lastFiveTests);
        setFilteredTests(lastFiveTests);
      } catch (error) {
        console.log(error);
        console.error("Error fetching the tests:", error);
      }
    };

    fetchTests();
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") {
      setFilteredTests(recentTests);
    } else {
      const filtered = tests.filter((test) =>
        test.testName.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTests(filtered);
    }
  };

  const handleSelectTest = (testName) => {
    setSearchQuery(testName);
    setFilteredTests([]);
  };

  const onSubmit = async (payload, actions) => {
    const formattedStartDate = formatISO(values.startDate);
    const formattedEndDate = formatISO(values.endDate);
    try {
      const res = await Axios.post(Request.signup, payload);
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error?.response.data.message);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    setIsChecked(false);
  };

  const {
    handleChange,
    values,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: AdminiterTestSchema,
    onSubmit,
  });

  const getError = (key) => {
    return touched[key] && errors[key];
  };

  return (
    <section className="pl-[54px] pt-[80px] pb-[59px] pr-[70px]">
      <h1 className="text-2xl font-bold text-darkPrimary pb-[43px]">
        Test administration $ Configuration
      </h1>
      {/* Select test */}
      <div className="mb-8">
        <div className="bg-white rounded-xl shadow-[0px_4px_28.3px_3px_#00000012] pt-4 pl-8 pb-8 pr-[58px]">
          <label
            htmlFor="testSelection"
            className="text-darkPrimary text-base font-extrabold mb-3"
          >
            Test Selection
          </label>
          <input
            type="text"
            id="testSelection"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for test"
            className="w-full p-2 border border-gray-300 rounded-lg pt-3 px-5 mb-4 outline-none"
          />
        </div>
        <div className="bg-white mt-3 border border-gray-300 rounded-xl shadow-md pt-4 pl-8 pb-8 pr-[58px] ">
          <p className="text-darkPrimary text-base font-extrabold mb-3 px-2 pt-2">
            Recent tests
          </p>
          {filteredTests.map((test, index) => (
            <div
              key={index}
              className="p-2 border-b border-gray-200 last:border-b-0 cursor-pointer"
              onClick={() => handleSelectTest(test.testName)}
            >
              {test.testName}
            </div>
          ))}
        </div>
      </div>
      {/* Schedule */}
      <div className="pt-4 pl-8 pb-8 pr-[58px] rounded-xl bg-white shadow-[0px_4px_28.3px_3px_#00000012] mb-8">
        <h3 className="text-darkPrimary text-base font-extrabold mb-3">
          Schedule settings
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <label htmlFor="startDate">
              <FaRegCalendarAlt />
            </label>
            <DatePicker
              id="startDate"
              name="startDate"
              selected={values.startDate}
              onChange={(date) => setFieldValue("startDate", date)}
              placeholderText="Enter Start Date"
              className={`w-full px-3 py-2 border border-[#E6E6E9] rounded-lg outline-none ${
                getError("startDate") ? "border border-red-500" : ""
              }`}
            />
            {getError("startDate") && (
              <p className="text-red-500 text-sm font-medium">
                {getError("startDate")}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="endDate">
              <FaRegCalendarAlt />
            </label>
            <DatePicker
              id="endDate"
              name="endDate"
              selected={values.endDate}
              onChange={(date) => setFieldValue("endDate", date)}
              placeholderText="Enter End Date"
              className={`w-full px-3 py-2 border border-[#E6E6E9] rounded-lg outline-none ${
                getError("endDate") ? "border border-red-500" : ""
              }`}
            />
            {getError("endDate") && (
              <p className="text-red-500 text-sm font-medium">
                {getError("endDate")}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="timeLimit">
              <MdAccessTime className="text-xl" />
            </label>
            <select
              id="timeLimit"
              name="timeLimit"
              value={values.timeLimit}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border border-[#E6E6E9] rounded-lg outline-none ${
                getError("timeLimit") ? "border border-red-500" : ""
              }`}
            >
              <option value="">Select Time Limit</option>
              <option value={180}>3 minutes</option>
              <option value={300}>5 minutes</option>
              <option value={600}>10 minutes</option>
              <option value={900}>15 minutes</option>
              <option value={1200}>20 minutes</option>
              <option value={1800}>30 minutes</option>
              <option value={2700}>45 minutes</option>
              <option value={3600}>1 hour</option>
              <option value={7200}>2 hours</option>
              <option value={10800}>3 hours</option>
            </select>
          </div>
        </div>
      </div>
      {/* Test behaviour */}
      <div className="pt-4 pl-8 pb-8 mb-8 pr-[58px] rounded-xl bg-white shadow-[0px_4px_28.3px_3px_#00000012]">
        <h3 className="text-darkPrimary text-base font-extrabold pb-[9px]">
          Test Behaviour
        </h3>
        <div className="flex gap-5 items-center">
          <div>
            <input
              type="number"
              name="passingScore"
              placeholder="Enter Passing Score"
              value={values.passingScore}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full px-3 py-2 border border-[#E6E6E9] rounded-lg outline-none"
            />
            {getError("passingScore") && (
              <p className="text-red-500 text-sm font-medium">
                {getError("passingScore")}
              </p>
            )}
          </div>
          {/* Randomize Questions */}
          <div className="flex space-x-2 items-end">
            <p>Randomize Questions:</p>
            <div className="flex flex-col">
              <label>Yes</label>
              <input
                type="radio"
                name="randomizeQuestions"
                value={true}
                checked={values.randomizeQuestions === true}
                onChange={() => setFieldValue("randomizeQuestions", true)}
              />
            </div>
            <div className="flex flex-col">
              <label>No</label>
              <input
                type="radio"
                name="randomizeQuestions"
                value={false}
                checked={values.randomizeQuestions === false}
                onChange={() => setFieldValue("randomizeQuestions", false)}
              />
            </div>
          </div>

          {/* Number of Attempts */}
          <div className="flex items-center space-x-2">
            <label>No of Attempts:</label>
            <div className="border text-black ">
              <button
                type="button"
                onClick={() =>
                  setFieldValue("attempts", Math.max(1, values.attempts - 1))
                }
                disabled={values.attempts <= 1}
                className="px-2 py-0.5 border text-black font-semibold text-2xl border-gray-300 bg-[#D9D9D9] disabled:opacity-75 disabled:cursor-not-allowed"
              >
                -
              </button>
              <input
                type="number"
                id="attempts"
                name="attempts"
                value={values.attempts}
                onChange={(e) =>
                  setFieldValue("attempts", Math.max(1, Number(e.target.value)))
                }
                onBlur={handleBlur}
                min={1}
                readOnly={true}
                className="w-16 text-center py-0.5 font-semibold font-roboto text-base outline-none"
              />
              <button
                type="button"
                onClick={() => setFieldValue("attempts", values.attempts + 1)}
                className="px-2 py-0.5 border text-black font-semibold text-2xl border-gray-300 bg-[#D9D9D9]"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Select Audience */}
      <div className="pt-4 pl-8 pb-8 mb-8 pr-[58px] rounded-xl bg-white shadow-[0px_4px_28.3px_3px_#00000012]">
        <label
          htmlFor="audience"
          className="text-darkPrimary text-base font-extrabold mb-3"
        >
          Target Audience
        </label>
        <select
          id="audience"
          // name="timeLimit"
          // value={values.timeLimit}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full px-3 py-2 border cursor-pointer border-[#E6E6E9] rounded-lg outline-none ${
            getError("timeLimit") ? "border border-red-500" : ""
          }`}
        >
          <option value="">Select Target Audience</option>
          <option value="">Individual User</option>
          <option value="">Groups</option>
          <option value="email">Email links</option>
        </select>
      </div>
    </section>
  );
};

export default AdministerTest;
