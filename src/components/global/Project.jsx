import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";


const Project = ({ img, prjName, dataAos, delay }) => {
   useEffect(() => {
      Aos.init({ duration: 1000, easing: "ease-in-out" });
   }, []);
   return (
      <div className="project" data-aos={dataAos} data-aos-delay={delay}>
         <div className="img-box">
            <img src={img} alt="project" />
         </div>
         <div className="content">
            <h3>{prjName}</h3>
            <NavLink to="./works" className="btn">
               show projects
            </NavLink>
         </div>
      </div>
   );
};

export default Project;
