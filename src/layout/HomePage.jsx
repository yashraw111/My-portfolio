import React from "react";
import yash from "../assets/Images/yash.jpg";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="Homepage ">
        <div className="Detail-img container-lg  align-item-center pt-5">
          <div className="row d-flex justify-content-between align-items-center p-5">
            <div className="details text-white col-lg-9 d-flex flex-column p-2 col-md-8">
              <h1>
                Hi, 👋 <br /> My Name is <br />{" "}
                <span class="gradient-text">Yash Panchal</span> <br /> I build
                things for web{" "}
              </h1>
            </div>
            <div class="profile-container col-lg-3 col-md-4">
              <img src={yash} alt="Profile Picture" class="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
