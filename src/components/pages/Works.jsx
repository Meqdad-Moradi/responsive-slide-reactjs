import React from "react";
import Header from "../Header";
import SinglePrj from "../SinglePrj";
import MainTitle from "../global/MainTitle";

import image1 from "./../../assets/images/girl.jpg";
import image2 from "./../../assets/images/laptop.jpg";

const Works = () => {
   return (
      <>
         <Header />
         <div className="works-page">
            {/* banner */}
            <div className="work-banner">
               <div className="container">
                  <h1>We love our project and also our customers! ♥</h1>
               </div>
            </div>
            <div className="container">
               {/* main title */}
               <MainTitle
                  title="our works or projects"
                  subTitle="We have done these projects!"
                  content="Doloribus ipsam porro consequatur dicta, impedit inventore enim
            ducimus non sit fugiat magni blanditiis molestiae. Nesciunt deleniti cupiditate cumque!"
               />

               {/* projects */}
               <section className="project-section">
                  <SinglePrj
                     prjName="project one"
                     content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  veniam porro adipisci quis suscipit, impedit hic beatae vero,
                  qui distinctio dignissimos asperiores voluptates eos eius
                  obcaecati fugit illum! Architecto repellat enim doloremque
                  rerum, delectus nemo at, id accusamus quia ullam perspiciatis,
                  magnam totam? Tenetur, inventore."
                     bg={image1}
                  />
                  <SinglePrj
                     prjName="project two"
                     content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  veniam porro adipisci quis suscipit, impedit hic beatae vero,
                  qui distinctio dignissimos asperiores voluptates eos eius
                  obcaecati fugit illum! Architecto repellat enim doloremque
                  rerum, delectus nemo at, id accusamus quia ullam perspiciatis,
                  magnam totam? Tenetur, inventore."
                     bg={image2}
                  />
               </section>
            </div>
         </div>
      </>
   );
};

export default Works;
