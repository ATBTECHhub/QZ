
import { useFormik } from "formik";
import waitlistIcon from "../assets/waitlistIcon.svg"
import InputField from "../components/InputField";
import { Axios } from "../config";
import Timer from "./Timer";
import { WaitlistSchema } from "../schemas";

const Waitlist = () => {
  const initialValues = {
    email: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.Waitlist, payload);
      console.log(res);
    } catch (error) {
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
    validationSchema: WaitlistSchema,
    onSubmit,
  });
  const getError = (key) => {
    return touched[key] && errors[key];
  };
  return (
    <section className="h-screen w-full bg-waitlistBg bg-cover bg-center flex items-center justify-center flex-col">
      <div className="flex flex-col items-center gap-5 text-center">
        <img src={waitlistIcon} alt="waitlistIcon" className="mb-5" />
        <p className="text-primary text-5xl font-extrabold mb-5">Coming Soon</p>
        <div className="text-primary text-7xl mb-5">
          <Timer duration={15 * 24 * 60 * 60 * 1000} />
        </div>
        <p className="text-white text-2xl font-bold mb-5">
          Just 15 days remaining for the reveal of our new product
        </p>
      </div>
      <form className="grid lg:flex lg:w-[669px] gap-6 h-16 pb-44">
        <InputField
          className="w-full"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={getError("email")}
        />
        <button className="bg-primary hover:bg-[#0b304f] text-white text-2xl px-2 py-2 font-light rounded-lg h-12 w-44">
          Notify Us
        </button>
      </form>
    </section>
  );
}


export default Waitlist