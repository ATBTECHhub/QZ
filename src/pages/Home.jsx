import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Ready from "../components/Ready";
import Testimonial from "../components/Testimonial";


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
      
    </>
  );
};

export default Home;
