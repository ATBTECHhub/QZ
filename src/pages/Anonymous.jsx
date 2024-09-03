import anonymous from '../assets/anonymous.svg'
import Navbar from '../components/Navbar';

const Anonymous = () => {
  return (
    <section className="font-fustat">
      <div>
        <Navbar />
      </div>
      <div className=" bg-light pt-20  container ">
        <div className="grid lg:grid-cols-[30%_30%] justify-center items-center mt-16 ">
          <img src={anonymous} alt="anonymous" className="w-[525px]" />
          <div className=" place-content-center items-center bg-[#FFFFFF] w-[398px] h-full ">
            <p className="font-bold mt-4 mb-8 ml-8 textcenter ">
              Welcome to QZ Platform
            </p>
            <form className="ml-8">
              <div className="mb-4 ">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className=" border  rounded w-[250px] py-2 px-3 bg-light "
                  placeholder="Enter Name to take test"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  className=" border  rounded w-[250px] py-2 px-3 bg-light "
                  placeholder="Enter Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Access Code (Optional)
                </label>
                <input
                  className=" border  rounded w-[250px] py-2 px-3 bg-light "
                  placeholder="Enter Code"
                />
                <div className="">
                  <button
                    className="bg-[#104573] hover:bg-[#0b304f] text-white font-bold py-2 px-[55px] rounded-lg w-[250px] mb-1 mt-8"
                    type="submit"
                  >
                    Start Test
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex text-[13px] lg:gap-[350px] gap-10 mt-16 mb-16 font-fustat max-h-none lg:h-16 container ">
          <h6>
            QZ Platform - Licensed by the National Authority of Technology
            Development, Nigeria.
          </h6>
          <div className="flex gap-4 lg:gap-20">
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Anonymous