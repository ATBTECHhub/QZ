import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Axios } from "../config";
import { WaitlistSchema } from "../schemas";
import Request from "../lib/requests";
import { toast } from "react-toastify";
import waitlistIcon from "../assets/waitlistIcon.svg";

const Waitlist = () => {
  const initialValues = {
    email: "",
  };

  // Set the target date 30 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  // State to store time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Function to calculate remaining time
  function calculateTimeLeft() {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(Request.waitlist, payload);
      if (res.data.message) {
        toast.success("Email added to the waitlist");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Error occurred, try again");
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

  return (
    <section className="text-center px-4 pt-[50px] pb-[70px] text-white h-scren bg-waitlistBg bg-cover bg-center flex items-center justify-center flex-col">
      <div className="">
        <img src={waitlistIcon} alt="logo" className="mx-auto block" />
        <h2 className="text-primary text-[40px] font-bold">Coming Soon</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <div>
            <span className="font-bold text-[30px] sm:text-[40px]">{timeLeft.days}</span>
            <p className="text-base font-normal">Days</p>
          </div>
          <span className="hidden sm:block text-[40px]"> - </span>
          <div>
            <span className="font-bold text-[30px] sm:text-[40px]">{timeLeft.hours}</span>
            <p className="text-base font-normal">Hours</p>
          </div>
          <span className="hidden sm:block text-[40px]"> - </span>
          <div>
            <span className="font-bold text-[30px] sm:text-[40px]">{timeLeft.minutes}</span>
            <p className="text-base font-normal">Minutes</p>
          </div>
          <span className="hidden sm:block text-[40px]"> - </span>
          <div>
            <span className="font-bold text-[30px] sm:text-[40px]">{timeLeft.seconds}</span>
            <p className="text-base font-normal">Seconds</p>
          </div>
        </div>
        <p className="text-white text-2xl font-bold mt-[40px] mb-[50px]">
          Just {timeLeft.days} days remaining for the reveal of our new product
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-cente gap-5">
        <div>
          <input
            className={`md:w-[436px] text-black bg-[#E6E6E9] text-2xl px-6 outline-none rounded-[10px] h-16 ${
              errors.email ? "border border-red-500" : ""
            }`}
            type="text"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary whitespace-nowrap hover:bg-[#0b304f] duration-200 text-white text-2xl py-3 px-9 font-bold rounded-[10px] disabled:opacity-75 disabled:cursor-not-allowed"
        >
          Notify Us
        </button>
      </form>
    </section>
  );
};

export default Waitlist;
