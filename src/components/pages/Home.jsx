import React from "react";
import Showcase from "./../Showcase";
import Services from "./../Services";
import About from "../About";
import Header from "../Header";
import WorkSection from "../WorkSection";

const Home = () => {
   return (
      <>
         <Header />
         <Showcase />
         <Services />
         <WorkSection />
         <About />
      </>
   );
};

export default Home;
