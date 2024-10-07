import { IoFilter } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GrEmptyCircle } from "react-icons/gr";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import Request from "../../lib/requests";
import { toast } from "react-toastify";
import { Axios } from "../../config";
import { Link } from "react-router-dom";
import DateFormatter from "../../utils/DateFormatter";
const QuestionBank = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    getQuestions();
  }, []);
  const getQuestions = async () => {
    try {
      const res = await Axios.get(Request.allQuestions);
      console.log(res);
      setQuestions(res.data);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.message || "An error occurred, please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="pl-[54px] py-[59px]">
      <h1 className="font-semibold text-[32px] font-fustat leading-[45px]">
        Question Bank
      </h1>
      {/* Search box */}
      <div className="mb-20 mt-5 bg-white pl-6 pr-[50px] pt-[46px] pb-[68px] rounded-[12px]">
        <div className="flex items-center border border-darkPrimary pr-5 py-[14px] pl-[14px] rounded-[5px]">
          <label htmlFor="search-box">
            <IoIosSearch className="text-[28px] text-[#808080B2]" />
          </label>
          <input
            className="bg-transparent font-medium text-base w-[500px] outline-none text-darkPrimary ml-2"
            type="text"
            placeholder="Search test by category"
            id="search-box"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IoFilter className="text-[28px] text-[#808080B2]" />
        </div>
      </div>
      {loading && (
        <p className="text-2xl text-dark mt-5 font-semibold">Loading...</p>
      )}
      {!loading && questions.length === 0 && (
        <p className="text-xl text-dark mt-5 font-semibold">
          You haven't added any questions yet, <Link></Link>
        </p>
      )}
      {/* Questions */}
      <div>
        {questions.map((question, i) => (
          <div
            key={i}
            className="bg-white rounded-[12px] pb-10 px-5 pt-[17px] mb-8"
          >
            <div className="flex items-center pb-4 border-b gap-8">
              <p>Question {i + 1}</p>
              <p>
                Categories:{" "}
                <span className="text-primary">{question.category}</span>
              </p>
              <p>
                Points: <span className="text-primary">{question.points} </span>
              </p>
            </div>
            <div className="pt-4 border-b border-[#E6E6E9] flex items-center justify-between pb-2">
              <div className="flex gap-5">
                <p className="flex gap-1 text-[#00000099]">
                  <FaRegCalendarAlt className="text-xl text-[#346580] opacity-[0.7]" />
                  Date Created
                  <span className="text-black">
                    <DateFormatter date={question.createdAt} />
                  </span>
                </p>
                <p className="flex gap-1 text-[#00000099]">
                  <MdAccessTime className="text-xl text-[#346580] opacity-[0.7]" />
                  Last Updated{" "}
                  <span className="text-black">{question.updatedAt}</span>
                </p>
              </div>
              <div className="flex gap-[10px] items-center text-primary">
                <FaRegEdit className="cursor-pointer" />
                <RiDeleteBin5Fill className="cursor-pointer" />
              </div>
            </div>
            <h1 className="pt-4 pb-5 text-dark text-xl font-semibold">
              {question.questionText}
            </h1>
            <ul className="flex flex-col gap-2">
              {question.questionOptions.map((option) => (
                <li
                  key={option._id}
                  className={`flex items-center gap-2 text-xl ${
                    option.isCorrect ? "text-secondary" : "text-dark"
                  }`}
                >
                  <GrEmptyCircle className="text-2xl" />
                  {option.optionText}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {questions.length > 0 && (
          <Link
            to="/instructor-dashboard/create-test"
            className="text-white bg-primary py-3 rounded-lg px-4 whitespace-nowrap"
          >
            Add Question
          </Link>
        )}
      </div>
      {/* <div className="bg-white rounded-[12px] pb-10 px-5 pt-[17px]">
        <div className="flex items-center pb-4 border-b gap-8">
          <p>Question 1</p>
          <p>
            Categories: <span className="text-primary"> Networking </span>
          </p>
          <p>
            Points: <span className="text-primary">1 </span>
          </p>
        </div>
        <div className="pt-4 border-b border-[#E6E6E9] flex items-center justify-between pb-2">
          <div className="flex gap-5">
            <p className="flex gap-1 text-[#00000099]">
              <FaRegCalendarAlt className="text-xl text-[#346580] opacity-[0.7]" />
              Date Created
              <span className="text-black">24th Aug 2024</span>
            </p>
            <p className="flex gap-1 text-[#00000099]">
              <MdAccessTime className="text-xl text-[#346580] opacity-[0.7]" />
              Last Updated <span className="text-black">24th Aug 2024</span>
            </p>
          </div>
          <div className="flex gap-[10px] items-center text-primary">
            <FaRegEdit className="cursor-pointer" />
            <RiDeleteBin5Fill className="cursor-pointer" />
          </div>
        </div>
        <h1 className="pt-4 pb-5 text-dark text-xl font-semibold">
          What is the full meaning of TCP in Networking?
        </h1>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2 text-dark text-xl">
            <GrEmptyCircle className="text-2xl" />
            Transportation control Parameter
          </li>
          <li className="flex items-center gap-2 text-dark text-xl">
            <GrEmptyCircle className="text-2xl" />
            Transmission Control Parameter
          </li>
          <li className="flex items-center gap-2 text-dark text-xl">
            <GrEmptyCircle className="text-2xl" />
            Transport Control Protocol
          </li>
          <li className="flex items-center gap-2 text-secondary text-xl">
            <GrEmptyCircle className="text-2xl" />
            Transmission Control Protocol
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default QuestionBank;
