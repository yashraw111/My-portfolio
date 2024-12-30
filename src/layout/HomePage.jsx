import React from "react";
import yash from "../assets/Images/yash.jpg";
import About from "./About";
import Technologies from "./Technologies";
import Resume from "./Resume";
import Project from "./Project";

const HomePage = () => {
  return (
    <>
      <div className="Homepage">
        <div className="Detail-img container-lg align-item-center pt-5">
          <div className="row d-flex justify-content-between align-items-center p-5 flex-column-reverse flex-lg-row">
            <div className="details text-white col-lg-9 d-flex flex-column p-2 col-md-8 text-center text-lg-start">
              <h1 className="" >
                Hi, 👋 <br /> My Name is <br />{" "}
                <span className="gradient-text">Yash Panchal</span> <br /> I build
                things for web{" "}
              </h1>
            </div>
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
      <br />
      <br />
      <Project/>
      <Resume/>

    </>
  );
};

export default HomePage;
