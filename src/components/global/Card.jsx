import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, title, disc, btnText }) => {
   return (
      <div className="card">
         <div className="img-box">
            <img src={img} alt="card_image" />
         </div>
         <div className="content">
            <h3>{title}</h3>
            <p>{disc}</p>
            <Link to="/s-details" className="btn">
               {btnText}
            </Link>
         </div>
      </div>
   );
};

export default Card;
