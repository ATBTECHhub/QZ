import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroOne from "../assets/heroImg1.svg";
import HeroTwo from "../assets/heroImg2.svg";
import { Link } from "react-router-dom";
import { heroSlider } from "../constants/data";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true, 
    // autoplaySpeed: 2000,
  };
  return (
    <section className="bg-light pt-[114px] pb-[62px]">
      <div className="container">
        <Slider {...settings}>
          {heroSlider.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col lg:flex-row gap-10 sm:gap-[80px] items-center">
                {/* !grid lg:grid-cols-2 items-center gap-[80px] */}
                <div className="lg:order-2 flex-1">
                  <img src={item.image} alt="hero-image" className="w-full" />
                </div>
                <div className="lg:order-1 flex-1">
                  <h1 className="text-[40px] sm:text-[60px] font-extrabold text-primary">
                    Revolutionize your exams with ease
                  </h1>
                  <p className="text-[24px] font-bold text-dark mb-[34px]">
                    Our platform simplifies exam creation, management and
                    student assessment.
                  </p>

                  <Link to="/signup">
                    <button className="w-[212px] mb-8 lg:mb-0 bg-secondary rounded-[30px] py-[10px] text-[24px] font-bold shadow-btnShadow">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="!grid lg:grid-cols-2 items-center gap-[80px]">
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
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;
