
import testi1 from "../assets/testi1.svg";
import testi2 from "../assets/testi2.svg";
import testi3 from "../assets/testi3.svg";
import tl from "../assets/tl.svg";
import br from "../assets/br.svg";

const Testimonials = () => {
  return (
    <section className=" font-fustat container  ">
      <div className="  text-center  container">
        <h1 className="text-[#F3B855] text-[24px] mt-[45px]">
          OUR TESTIMONIALS
        </h1>
        <h1 className=" text-[40px]">What people say about us</h1>
      </div>
      <div className="flex justify-center items-center ">
        <img src={testi1} alt="testi1" className="w-[50px] h-[50px]" />
        <img src={testi2} alt="testi2" className="w-[80px] h-[80px]" />
        <img src={testi3} alt="testi3" className="w-[50px] h-[50px]" />
      </div>
      <div className="justify-center items-center text-center ">
        <h1 className="text-bold">Emmanuella John</h1>
        <h5 className="text-[#231F20] text-xs">Admin Officer OGPC</h5>
      </div>
      <div className="flex justify-center items-center ">
        <img src={tl} alt="tl" className="mb-[113.23px]" />
        <h1 className="text-center  w-[444px] h-[113px] ">
          This platform has transformed how I handle exams. The automated
          grading is a game changer
        </h1>
        <img src={br} aria-label="br" className="mt-[100px] lg:mt-1" />
      </div>
    </section>
  );
};

export default Testimonials;





// const Testimonial = () => {
//   return (
//     <section className="bg-white py-[48px] font-bold">
//       <div className="container text-center">
//         <h3 className="text-secondary text-[24px]">OUR TESTIMONIALS</h3>
//         <p className="text-[40px]">What people say about us</p>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
