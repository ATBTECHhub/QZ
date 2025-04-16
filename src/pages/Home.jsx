import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Ready from "../components/Ready";
import Testimonial from "../components/Testimonial";
// import TestTakerLogin from "./TestTakerLogin";
// import Login from "./Login"
// import Waitlist from "../pages/Waitlist";




const Home = () => {
  return (
    <>
      <Navbar /> 
      <Hero />
      <Features />
      <AboutUs />
      <Testimonial />
      <Ready />
      <Footer />
      {/* <TestTakerLogin/> */}
      {/* <Login/> */}
      {/* <Waitlist /> */}
      

  
      
    </>
  );
};

export default Home;
