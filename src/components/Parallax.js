import React, { useEffect } from "react";
import M from "materialize-css";
import { Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";

const Parallax = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".parallax");
    M.Parallax.init(elems, {});
  }, []);

  return (
    <div>
      <div className="col s12">
        <div class="parallax-container">
          <div class="parallax">
            <img
              src={require("../assets/images/parallax1.jpg")}
              alt="Parallax1"
            />
          </div>
        </div>
        <div class="section white">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </div>
        <div class="parallax-container">
          <div class="parallax">
            <img
              src={require("../assets/images/parallax2.jpg")}
              alt="Parallax2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
