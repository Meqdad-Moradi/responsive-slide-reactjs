import "aos/dist/aos.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./assets/style/style.css";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/Notfound";
import Works from "./components/pages/Works";

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<Notfound />} />
         </Routes>
      </>
   );
};

export default App;
