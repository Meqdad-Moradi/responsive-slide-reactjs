import React from "react";

const MainTitle = ({ title, subTitle, content }) => {
   return (
      <div className="main-title">
         <h4>{title}</h4>
         <h1>{subTitle}</h1>
         <p>{content}</p>
      </div>
   );
};

export default MainTitle;
