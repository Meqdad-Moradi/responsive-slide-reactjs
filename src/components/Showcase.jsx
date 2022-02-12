import React from "react";
import Slider from "react-slick";
import showcase_image1 from "./../assets/images/showcase.webp";
import showcase_image2 from "./../assets/images/qala.jpg";

const Showcase = () => {
   const settings = {
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      arrows: false,
      touchThreshold: 15,
   };

   return (
      <div className="showcase">
         <div className="container">
            <Slider {...settings} className="hi">
               <div className="slide">
                  <div className="col">
                     <div className="content">
                        <h1>Discover the world's top designers & creatives</h1>
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing
                           elit. Maxime aperiam quibusdam dolorem provident
                           quaerat facilis.
                        </p>
                        <a href="#" className="btn">
                           show more
                        </a>
                     </div>
                     <div className="img-box">
                        <img src={showcase_image1} alt="show_case_image" />
                     </div>
                  </div>
               </div>

               <div className="slide">
                  <div className="col">
                     <div className="content">
                        <h1>Discover the world's top designers & creatives</h1>
                        <p>
                           Lorem ipsum, dolor sit amet consectetur adipisicing
                           elit. Maxime aperiam quibusdam dolorem provident
                           quaerat facilis.
                        </p>
                        <a href="#" className="btn">
                           show more
                        </a>
                     </div>
                     <div className="img-box">
                        <img src={showcase_image2} alt="show_case_image" />
                     </div>
                  </div>
               </div>
            </Slider>
         </div>
      </div>
   );
};

export default Showcase;
