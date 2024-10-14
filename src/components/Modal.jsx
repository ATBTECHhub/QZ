import { Link } from "react-router-dom";
import success from "../assets/successImg.svg";
import check from "../assets/successCheck.svg";

const Modal = ({path, cta, text}) => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-white z-[9999] items-center flex justify-center transition-all duration-500">
        <div className="w-[317px] md:w-[699px] p-8 text-center border text-white bg-white mx-auto rounded shadow-[0px_4px_45.5px_-3px_#00000026]">
          <div>
            <img src={check} alt="checkmark" className="block mx-auto mb-3" />
            <img src={success} alt="success" className="block mx-auto" />
            <p className="text-[#555555] text-base pt-6 pb-[45px]">{text}</p>

            <Link
              to={path}
              className="text-base font-extrabold bg-primary rounded-[10px] py-2 block md:w-[280px] mx-auto"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
