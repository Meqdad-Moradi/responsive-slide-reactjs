import React from "react";
import Showcase from "./../Showcase";
import Services from "./../Services";
import About from "../About";
import Header from "../Header";
import WorkSection from "../WorkSection";
import Footer from "../Footer";

const Home = () => {
   return (
      <>
         <Header />
         <Showcase />
         <Services />
         <WorkSection />
         <About />
         <Footer />
      </>
   );
};

export default Home;
