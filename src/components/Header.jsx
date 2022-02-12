import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   return (
      <header>
         <div className="container">
            <div className="logo">
               <NavLink to="/">logo</NavLink>
            </div>

            <nav className="nav">
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
            </nav>

            <button className="register-btn btn">register</button>

            <div className="toggler">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </header>
   );
};

export default Header;
