import React from "react";
import MainTitle from "./global/MainTitle";
import about_img from "./../assets/images/girl.jpg";

const About = () => {
   return (
      <section id="about">
         <div className="container">
            <div className="about-content">
               <div className="col">
                  <MainTitle
                     title="about us"
                     subTitle="who are we?"
                     content="Doloribus ipsam porro consequatur dicta, impedit inventore enim
               ducimus non sit fugiat magni blanditiis molestiae. Nesciunt deleniti cupiditate cumque."
                  />
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                     aperiam corrupti eligendi cupiditate? Aliquam perferendis
                     explicabo quasi corporis illo consequuntur similique
                     obcaecati amet assumenda. Provident quod maiores eos esse,
                     perspiciatis accusantium magni doloremque tenetur! Illo
                     neque voluptatum voluptas nihil, obcaecati deleniti
                     assumenda reprehenderit vitae eligendi, quam quis dolore
                     voluptate exercitationem.
                  </p>
                  <div className="socials">
                     <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        facebook
                     </a>
                     <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        twitter
                     </a>
                     <a
                        href="http://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        instagram
                     </a>
                  </div>
               </div>
               <div className="img-box">
                  <img src={about_img} alt="about_image" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
