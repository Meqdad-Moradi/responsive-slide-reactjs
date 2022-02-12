import React from "react";
import { NavLink } from "react-router-dom";

const Project = ({ img, prjName }) => {
   return (
      <div className="project">
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
