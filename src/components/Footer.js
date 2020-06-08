import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="page-footer">
      <div class="row">
        <div class="col s6">
          <div class="row">
            <div class="col s12">
              <h1 style={{ fontSize: "2vw" }}>Contact Us</h1>
            </div>
            <br />
            <div class="col s12">
              <i className="material-icons">location_on</i>
              <p>
                Near-T-3, Plot No. 493, Jagdamba Apartment, Swarn Vihar, Muhana
                Mandi Gate No. 2, Sanganer, Jaipur
              </p>
            </div>
            <div class="col s12">
              <i className="material-icons">call</i>
              <p>+91-7976964252</p>
              <p>+91-9649224791</p>
            </div>
            <div class="col s12">
              <i className="material-icons">email</i>
              <p>abc@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="col s6">
          <div class="row">
            <div class="row">
              <div class="col s12">
                <h1 style={{ fontSize: "2vw" }}>Quick Links</h1>
              </div>
              <br />
              <br />
              <br />
              <div class="col s12">
                <Link to="/about">
                  <b>About</b>
                </Link>
              </div>
              <br />
              <br />
              <div class="col s12">
                <Link to="/services">
                  <b>Services</b>
                </Link>
              </div>
              <br />
              <br />
              <div class="col s12">
                <Link to="/gallery">
                  <b>Gallery</b>
                </Link>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
        <div class="col s12 center">
          <h1>© 2020 Rajawat Security Agency. All Rights Reserved.</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
