import React from "react";
import yash from "../assets/Images/yash.jpg";
import About from "./About";
import Technologies from "./Technologies";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="Homepage">
        <div className="Detail-img container-lg align-item-center ">
          <div className="row d-flex justify-content-between align-items-center p-5 flex-column-reverse flex-lg-row">
            {/* Left Section - Details */}
            <div className="details text-white col-lg-9 d-flex flex-column p-2 col-md-8 text-center text-lg-start">
              <h1>
                Hi, 👋 <br /> My Name is <br />{" "}
                <span className="pink-text">Yash Panchal</span> <br /> I build
                things for <span className="green-text"> web{" "}</span>
              </h1>

              {/* Social Icons (Moved Down) */}
              <div className="social mt-4">
                <a href="https://github.com/yashraw111" target="blank">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" target="blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/yash-panchal-6985312b0/">
                  <i className="fa-brands fa-linkedin-in" target="blank"></i>
                </a>
              </div>

              {/* Buttons Section */}
              <div className="button-container mt-4">
              <NavLink to='/contact' className="text-decoration-none">
                <button className="contact-btn">
                 
                  CONTACT ME <i className="fa-solid fa-user-group"></i>
                </button>
                  </NavLink>
                <button className="resume-btn">
                <a href="../assets/Images/mern resume (1).pdf" className="text-decoration-none text-white" download>
                GET RESUME <i className="fa-solid fa-download"></i>
            </a>
               
                </button>
              </div>
            </div>

            {/* Right Section - Profile Image */}
            <div className="profile-container col-lg-3 col-md-4 mb-4 mb-lg-0 text-center">
              <img src={yash} alt="Profile Picture" className="profile-pic" />
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <About />
      <br /><br />
      <Technologies />
      <br /><br />
      <Project />
      <Contact/>
      {/* <Resume /> */}
    </>
  );
};

export default HomePage;
