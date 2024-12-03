import React from "react";
import html from "../assets/Images/html.png";
import css from "../assets/Images/css.png";
import js from "../assets/Images/js.png";
import redux from "../assets/Images/redux.png";
import tailwind from "../assets/Images/tailwind.png";
import bootstrap from "../assets/Images/bootstrap.png";
import jquery from "../assets/Images/jquery.webp";
import react from "../assets/Images/react.png";
import vs from "../assets/Images/vs.png";
import npm from "../assets/Images/npm.png";
import restfullapi from "../assets/Images/restfullapi.png";
import git from "../assets/Images/git.png";
import github from "../assets/Images/github.png";
import firebase from "../assets/Images/firebase.png";

const Technologies = () => {
  return (
    <>
      <div className="technologies">
        <div className="container">
          <div className="teckStack">
            <h1>Tech Stack</h1>
            <p>Technologies i've been working with recently </p>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3 py-2">
                <img src={html} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={css} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={js} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={bootstrap} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={tailwind} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={redux} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={react} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={jquery} alt="" width={100} />
              </div>
            </div>
          </div>
          <div className="teckStack">
            <h1>Tools</h1>
            <div className="row ">
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3 py-2">
                <img src={vs} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={git} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3">
                <img src={github} alt="" />
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex col-6 justify-content-center imgbox  py-3 d-flex align-items-center">
                <img src={npm} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
