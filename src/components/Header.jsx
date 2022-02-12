import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   const [showNave, setShowNave] = useState(false);

   // toggle the navigation menu
   const toggle = () => {
      setShowNave(!showNave);
   };

   return (
      <header>
         <div className="container">
            <div className="logo">
               <NavLink to="/">logo</NavLink>
            </div>

            <nav className={showNave === true ? "nav active" : "nav"}>
               <ul className="nav-list">
                  <li>
                     <NavLink to="/">home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/works">works</NavLink>
                  </li>
                  <li>
                     <a href="#services">services</a>
                  </li>
                  <li>
                     <a href="#about">about</a>
                  </li>
                  <li>
                     <a href="#contact">contact</a>
                  </li>
               </ul>
               <button className="register-btn btn">register</button>
            </nav>

            <div
               className={showNave === true ? "toggler active" : "toggler"}
               onClick={toggle}
            >
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </header>
   );
};

export default Header;
