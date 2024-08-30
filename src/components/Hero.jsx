import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroOne from "../assets/heroImg1.svg";
import HeroTwo from "../assets/heroImg2.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="bg-light pt-[83px] pb-[62px]">
      <div className="container">
        <Slider {...settings}>
          <div className="!grid lg:grid-cols-2 items-center gap-[80px]">
            <div className="lg:order-2">
              <img src={HeroOne} alt="" />
            </div>
            <div className="lg:order-1">
              <h1 className="text-[60px] font-extrabold text-primary">
                Revolutionize your exams with ease
              </h1>
              <p className="text-[24px] font-bold text-dark mb-[34px]">
                Our platform simplifies exam creation, management and student
                assessment.
              </p>
              <Link>
                <button
                  to="/"
                  className="w-[212px] bg-secondary rounded-[30px] py-[10px] text-[24px] font-bold shadow-btnShadow"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          <div className="!grid lg:grid-cols-2 items-center gap-[80px]">
            <div className="lg:order-2">
              <img src={HeroTwo} alt="" />
            </div>
            <div className="lg:order-1">
              <h1 className="text-[60px] font-extrabold text-primary">
                Revolutionize your exams with ease
              </h1>
              <p className="text-[24px] font-bold text-dark mb-[34px]">
                Our platform simplifies exam creation, management and student
                assessment.
              </p>
              <Link>
                <button
                  to="/"
                  className="w-[212px] bg-secondary rounded-[30px] py-[10px] text-[24px] font-bold shadow-btnShadow"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
