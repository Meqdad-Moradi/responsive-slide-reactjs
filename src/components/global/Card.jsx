import React from "react";

const Card = ({ img, title, disc, btnText }) => {
   return (
      <div className="card">
         <div className="img-box">
            <img src={img} alt="card_image" />
         </div>
         <div className="content">
            <h3>{title}</h3>
            <p>{disc}</p>
            <a href="#" className="btn">
               {btnText}
            </a>
         </div>
      </div>
   );
};

export default Card;
