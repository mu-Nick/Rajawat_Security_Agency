import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const NavBar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, { edge: "right" });
  }, []);

  return (
    <>
      <div style={{ top: "10px", position: "fixed", width: "100%" }}>
        <nav className="transparentBG" style={{ padding: "0% 3%" }}>
          {/* <Link to="/" className="brand-logo left"> */}
            <img
              className="logoimg responsive-img left"
              src={require("../assets/images/logo.png")}
              alt="LOGO"
            />
          {/* </Link> */}
          <h1 class="title-font sm:text-6xl text-2xl mb-4 font-medium text-gray-900 left">
            Rajawat Security Agency
          </h1>
          <a
            data-target="mobile-demo"
            className="sidenav-trigger right"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <b>About</b>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <b>Services</b>
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <b>Gallery</b>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <b>Contact</b>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="sidenav sidenav-close" id="mobile-demo">
        <li>
          <Link to="/">
            <b>Home</b>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <b>About</b>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <b>Services</b>
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <b>Gallery</b>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <b>Contact</b>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
