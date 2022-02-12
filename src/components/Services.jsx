import React from "react";
import Card from "./global/Card";
import image1 from "./../assets/images/girl.jpg";
import image2 from "./../assets/images/laptop.jpg";
import MainTitle from "./global/MainTitle";

const Services = () => {
   return (
      <section id="services">
         <div className="container">
            <MainTitle
               title="our services"
               subTitle="We can help you with"
               content="Doloribus ipsam porro consequatur dicta, impedit inventore enim
            ducimus non sit fugiat magni blanditiis molestiae. Nesciunt deleniti cupiditate cumque!"
            />

            {/* cards */}
            <div className="services-cards">
               <Card
                  img={image1}
                  title="beautiful girl"
                  disc="Doloribus ipsam porro consequatur dicta, impedit inventore
                  enim ducimus non sit fugiat magni"
                  btnText="show more"
               />
               <Card
                  img={image2}
                  title="beautiful laptop"
                  disc="Doloribus ipsam porro consequatur dicta, impedit inventore
                  enim ducimus non sit fugiat magni"
                  btnText="show more"
               />
               <Card
                  img={image1}
                  title="beautiful girl"
                  disc="Doloribus ipsam porro consequatur dicta, impedit inventore
                  enim ducimus non sit fugiat magni"
                  btnText="show more"
               />
            </div>
         </div>
      </section>
   );
};

export default Services;
