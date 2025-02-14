import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Request from "../../lib/requests";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { CreateQuestionSchema } from "../../schemas";
import Textarea from "../Textarea";
import useTestStore from "../../store/testStore";
import { Axios } from "../../config";
import TrueFalse from "./TrueFalse";
import { MultipleChoiceSchema, TrueFalseSchema } from "../../schemas";
import Multichoice from "./Multichoice";
import { toast } from "react-toastify";
import useAuthStore from "../../store/authStore";
const ContinueTest = () => {
  const [activeTab, setActiveTab] = useState("Create Questions");
  const navigate = useNavigate();
  const testIds = useTestStore((state) => state.testIds);
  const tabs = ["Dashboard", "Create Test", "Create Questions"];
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  useEffect(() => {
    console.log(token);
  }, []);
  // const handleTabClick = (tab) => {
  //   setActiveTab(tab);
  //   if (tab === "Dashboard") {
  //     navigate("/instructor-dashboard");
  //   } else if (tab === "Create Test") {
  //     navigate("/instructor-dashboard/create-test");
  //   }
  // };
  const tabRoutes = {
    Dashboard: "/instructor-dashboard",
    "Create Test": "/instructor-dashboard/create-test",
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tabRoutes[tab]) {
      navigate(tabRoutes[tab]);
    }
  };
  const initialValues = {
    questionText: "",
    questionType: "",

    questionOptions: [
      { optionText: "", isCorrect: false },
      { optionText: "", isCorrect: false },
      { optionText: "", isCorrect: false },
      { optionText: "", isCorrect: false },
    ],
    questionAnswers: [],
    points: 0,
    randomizeAnswers: true,
    createdBy: user,
  };
  const onSubmit = async (payload, actions) => {
    const {
      questionType,
      questionText,
      questionOptions,
      questionAnswers,
      points,
      randomizeAnswers,
      createdBy,
    } = payload;
    let formattedPayload = {};
    if (questionType === "multipleChoice") {
      formattedPayload = {
        questionType,
        questionText,
        questionOptions,
        points,
        randomizeAnswers,
        createdBy,
      };
    } else if (questionType === "TrueFalse") {
      formattedPayload = {
        questionType,
        questionText,
        questionAnswers,
        points,
        randomizeAnswers,
      };
    }
    try {
      const latestTestId = testIds[testIds.length - 1];
      const requestUrl = Request.createQuestion.replace(
        ":testId",
        latestTestId
      );
      const res = await Axios.post(requestUrl, formattedPayload);
      console.log(res);
      if (res.status === 201) {
        navigate("/instructor-dashboard/manage-test");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const getValidationSchema = (questionType) =>
    Yup.object().shape({
      questionType: Yup.string()
        .required("Question Type is required")
        .oneOf(["multipleChoice", "TrueFalse"]),
      ...(questionType === "multipleChoice"
        ? {
            questionText: MultipleChoiceSchema.fields.questionText,
            questionOptions: MultipleChoiceSchema.fields.questionOptions,
            points: MultipleChoiceSchema.fields.points,
            randomizeAnswers: MultipleChoiceSchema.fields.randomizeAnswers,
          }
        : questionType === "TrueFalse"
        ? {
            questionText: TrueFalseSchema.fields.questionText,
            questionAnswers: TrueFalseSchema.fields.questionAnswers,
            points: TrueFalseSchema.fields.points,
            randomizeAnswers: TrueFalseSchema.fields.randomizeAnswers,
          }
        : {}),
    });

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
    // validationSchema: CreateQuestionSchema,
    validationSchema: Yup.lazy((values) =>
      getValidationSchema(values.questionType)
    ),
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  const Randomize = () => {
    return (
      <section className="bg-white w-[710px] shadow-formShadow rounded-[12px] pt-4 pl-[25px] pb-[34px]">
        <h4 className="text-base font-extrabold text-darkPrimary">
          Question Settings
        </h4>
        <div className="flex items-end gap-[70px]">
          <div className="flex items-end gap-[45px]">
            <p className="text-base leading-[22px] text-darkPrimary">
              Randomize Answers
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <label htmlFor="yes">Yes</label>
                <input
                  type="radio"
                  id="yes"
                  name="randomizeAnswers"
                  value="true"
                  checked={values.randomizeAnswers === true}
                  onChange={() => setFieldValue("randomizeAnswers", true)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="no">No</label>
                <input
                  type="radio"
                  id="no"
                  name="randomizeAnswers"
                  value="false"
                  checked={values.randomizeAnswers === false}
                  onChange={() => setFieldValue("randomizeAnswers", false)}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="point" className="text-base">
              Add Points Value
            </label>
            <input
              id="point"
              type="number"
              value={values.points}
              onChange={handleChange}
              onBlur={handleBlur}
              name="points"
              className={`outline-none border border-[#808080B2] w-[60px] px-2 text-sm ${
                getError("points") ? "border border-red-500" : ""
              }`}
            />
          </div>
        </div>
      </section>
    );
  };
  return (
    <section className="pl-[54px] pt-[80px] pb-[59px] pr-[70px]">
      <h1 className="text-2xl font-bold pb-[34px] text-darkPrimary">
        Create Questions
      </h1>
      {/* Tab */}
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
        {activeTab === "Create Questions" && (
          <form onSubmit={handleSubmit}>
            <div className="bg-white gap-[9px] flex flex-col pl-[23px] pr-[51px] pb-[33px] pt-4 rounded-xl shadow-formShadow mb-[64px]">
              <label
                htmlFor="questionType"
                className="text-base  leading-6 text- darkPrimary font-extrabold"
              >
                Question type
              </label>
              <select
                type="text"
                placeholder="Select question type"
                name="questionType"
                id="questionType"
                className={`w-full px-5 py-3 rounded-[8px] outline-none border border-[#E6E6E9] ${
                  getError("questionType") ? "border border-red-500" : ""
                }`}
                value={values.questionType}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select</option>
                <option value="multipleChoice">
                  Multiple choice questions
                </option>
                <option value="TrueFalse">True or False</option>
                <option value="essay">Short essay</option>
              </select>
              {getError("questionType") && (
                <p className="text-red-500 text-sm font-medium">
                  {getError("questionType")}
                </p>
              )}
            </div>
            <Textarea
              label="Question"
              name="questionText"
              type="text"
              placeholder="Enter Question"
              value={values.questionText}
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("questionText")}
            />
            {/* Multichoice inputs */}
            {values.questionType === "multipleChoice" && (
              <>
                <Multichoice
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  isSubmitting={isSubmitting}
                  getError={(name) => errors[name] && touched[name]}
                />
                <Randomize />
                <div className="flex items-center justify-between my-[48px]">
                  <button
                    type="button"
                    onClick={() =>
                      setFieldValue("questionOptions", [
                        ...values.questionOptions,
                        { optionText: "", isCorrect: false },
                      ])
                    }
                    className="w-[251px] whitespace-nowrap text-xl font-extrabold px-[43px] py-3 rounded-lg text-white bg-primary"
                  >
                    Add More Options
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="disabled:opacity-75 disabled:cursor-not-allowed w-[251px] whitespace-nowrap text-xl font-extrabold px-[43px] py-3 rounded-lg text-white border-primary border bg-primary"
                  >
                    Submit
                  </button>
                </div>
              </>

              // <>
              //   <div className="bg-white gap-[9px] flex flex-col pl-[23px] pr-[51px] pb-[33px] pt-4 rounded-xl shadow-formShadow mb-[64px]">
              //     <p className="text-base  leading-6 text-darkPrimary font-extrabold">
              //       Enter Answer options
              //     </p>

              //     {values.questionOptions.map((option, index) => (
              //       <div key={index} className="flex gap-[10px]">
              //         <label
              //           htmlFor={`option-${index}`}
              //           className="text-base font-extrabold leading-[22px]"
              //         >
              //           {String.fromCharCode(65 + index)}
              //         </label>
              //         <div className="w-full">
              //           <textarea
              //             type="text"
              //             name={`questionOptions[${index}].optionText`}
              //             placeholder={`Enter option ${String.fromCharCode(
              //               65 + index
              //             )}`}
              //             id={`option-${index}`}
              //             className={`border border-[#E6E6E9] px-5 w-full py-3 rounded-[8px] outline-none h-[80px] resize-none ${
              //               getError(`questionOptions[${index}].optionText`)
              //                 ? "border-red-500"
              //                 : ""
              //             }`}
              //             value={values.questionOptions[index]?.optionText}
              //             onChange={handleChange}
              //             onBlur={handleBlur}
              //           />

              //           <div>
              //             <input
              //               id={`isCorrect-${index}`}
              //               type="checkbox"
              //               name={`questionOptions[${index}].isCorrect`}
              //               onChange={() =>
              //                 setFieldValue(
              //                   `questionOptions[${index}].isCorrect`,
              //                   !option.isCorrect
              //                 )
              //               }
              //               onBlur={handleBlur}
              //               checked={option.isCorrect}
              //             />
              //             <label
              //               htmlFor={`isCorrect-${index}`}
              //               className="text-base text-[#231F20CC] ml-1 cursor-pointer"
              //             >
              //               Correct Answer
              //             </label>
              //           </div>
              //         </div>
              //       </div>
              //     ))}
              //   </div>

              //   <Randomize />
              //   <div className="flex items-center justify-between my-[48px]">
              //     <button
              //       type="button"
              //       onClick={() =>
              //         setFieldValue("questionOptions", [
              //           ...values.questionOptions,
              //           { optionText: "", isCorrect: "" },
              //         ])
              //       }
              //       className="w-[251px] whitespace-nowrap text-xl font-extrabold px-[43px] py-3 rounded-lg text-white bg-primary"
              //     >
              //       Add More Options
              //     </button>
              //     <button
              //       type="submit"
              //       disabled={isSubmitting}
              //       className="disabled:opacity-75 disabled:cursor-not-allowed w-[251px] whitespace-nowrap text-xl font-extrabold px-[43px] py-3 rounded-lg text-white border-primary border bg-primary"
              //     >
              //       Submit
              //     </button>
              //   </div>
              // </>
            )}

            {/* True or false inputs */}
            {values.questionType === "TrueFalse" && (
              <>
                <TrueFalse values={values} setFieldValue={setFieldValue} />
                <Randomize />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="disabled:opacity-75 mt-5 disabled:cursor-not-allowed w-[251px] whitespace-nowrap text-xl font-extrabold px-[43px] py-3 rounded-lg text-white border-primary border bg-primary"
                >
                  Submit
                </button>
              </>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default ContinueTest;
