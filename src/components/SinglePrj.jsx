import React from "react";
import { Link } from "react-router-dom";

const SinglePrj = ({ prjName, content, bg }) => {
   return (
      <div
         className="singlePrj"
         style={{ background: `url("${bg}") no-repeat center / cover` }}
      >
         <div className="prj-content">
            <div className="prj-details">
               <h2>{prjName}</h2>
               <p>{content}</p>
            </div>

            {/* project links */}
            <div className="btns">
               <Link to="/" className="btn">
                  show more
               </Link>
               <Link to="/" className="btn">
                  Project
               </Link>
            </div>
         </div>
      </div>
   );
};

export default SinglePrj;
