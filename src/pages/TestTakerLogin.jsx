
import Navbar from "../components/Navbar";
import AuthFooter from "../components/AuthFooter";
import InputField from "../components/InputField";
import { Axios } from "../config";
import Request from "../lib/requests";
import { TestTakerLoginSchema } from "../schemas";
import { useFormik } from "formik";

const TestTakerLogin = () => {

  const initialValues = {
    email: "",
    accesscode: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.login, payload);
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
    validationSchema: TestTakerLoginSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };


  return (
    <>
      <Navbar />
      <section className="font-fustat bg-light pt-44 ">
        <div className="grid justify-center pb-24 ">
          <form
            className="bg-white px-5 sm:px-[58px] lg:px-[30px] xl:px-[58px] pt-[38px] w-[500px] h-[500px] "
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl lg:text-xl font-bold text-center mb-8">
              Login to take Test
            </h2>
            <h2 className="text-2xl lg:text-xl font-extrabold text-center justify-center text-primary mb-8">
              Use your access code to take a test
            </h2>
            <InputField
              label="Access code"
              name="accesscode"
              type="code"
              placeholder="Enter Code"
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("accesscode")}
            />
            <InputField
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}
              error={getError("email")}
            />
            <button className="bg-primary hover:bg-[#0b304f] text-white font-inter text-base w-full py-[18px] font-light rounded-[10px] mb-2 mt-2">
              Log in
            </button>
          </form>
        </div>

        <AuthFooter />
      </section>
    </>
  );
}

export default TestTakerLogin;
