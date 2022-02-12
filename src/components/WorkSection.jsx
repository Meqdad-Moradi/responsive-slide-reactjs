import React from "react";
import MainTitle from "./global/MainTitle";
import Project from "./global/Project";
import img1 from "./../assets/images/girl.jpg";
import img2 from "./../assets/images/laptop.jpg";

const WorkSection = () => {
   return (
      <section id="works">
         <div className="container">
            <MainTitle
               title="our works"
               subTitle="The following projects have been done by us"
               content="Doloribus ipsam porro consequatur dicta, impedit inventore enim
               ducimus non sit fugiat magni blanditiis molestiae. Nesciunt deleniti cupiditate cumque."
            />

            <div className="projects-grid">
               <Project img={img1} prjName="project one" />
               <Project img={img2} prjName="project two" />
               <Project img={img1} prjName="project three" />
               <Project img={img2} prjName="project four" />
               <Project img={img1} prjName="project five" />
               <Project img={img2} prjName="project six" />
            </div>
         </div>
      </section>
   );
};

export default WorkSection;
