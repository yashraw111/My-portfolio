import React from "react";
import html from "../assets/Images/html.svg";
import css from "../assets/Images/css.svg";
import javascript from "../assets/Images/javascript.svg";
import bootstrap from "../assets/Images/bootstrap.svg";
import tailwind from "../assets/Images/tailwind.svg";
import react from "../assets/Images/react.svg";
import nodejs from "../assets/Images/nodejs-icon.svg";
import redux from "../assets/Images/redux.png";
import express from "../assets/Images/expressjs-icon.svg";
import mongodb from "../assets/Images/mongoDB.svg";
import git from "../assets/Images/git.svg";
import github from "../assets/Images/github.png";
import api from "../assets/Images/api-svgrepo-com.svg";

import postman from "../assets/Images/postman-icon-svgrepo-com (1).svg";
import cloudinary from "../assets/Images/cloudinary-svgrepo-com.svg";
import ejs from "../assets/Images/ejs-svgrepo-com.svg";
import firebase from "../assets/Images/firebase.svg";

const Technologies = () => {


  return (
    <>
      <div className="technologies ">
      <div class="top-boarder mb-4">
      
      </div>
        <div className="container ">
          <div className="teckStack">
            <div class="btn-container mt-3 mb-4">
            <div class="line"></div>
            <button class="btn">Skills</button>
          </div>
            <div className="row  align-items-center ">
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5  col-md-3 col-sm-6 mt-3    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img src={html} alt="" />
                <p className="mt-2">HTML</p> 
                </div>
              </div>
            
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img src={css} alt="" />
                <p className="mt-2">CSS</p> 
                </div>
              </div>
            
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img src={javascript} alt="" />
                <p className="mt-3">JAVASCRIPT</p> 
                </div>
              </div>
            
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img src={bootstrap} alt="" />
                <p className="mt-3">BOOTSTRAP</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img src={react} alt="" />
                <p className="mt-4">REACT</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={tailwind} alt="" />
                <p className="mt-4">TAILWIND</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={nodejs} alt="" />
                <p className="mt-3">NODEJS</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={express} alt="" />
                <p className="mt-3">EXPRESS</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={mongodb} alt="" height={50} />
                <p className="mt-3">MONGODB</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={git} alt="" />
                <p className="mt-3">GIT</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={github} alt="" />
                <p className="mt-3">GITHUB</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={redux} alt="" />
                <p className="mt-3">REDUX</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={api} alt="" />
                <p className="mt-3">API</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={postman} alt="" />
                <p className="mt-3">POSTMAN</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={cloudinary} alt="" />
                <p className="mt-3">CLOUDINARY</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={ejs} alt="" />
                <p className="mt-3">EJS</p> 
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6 mt-5    col-6 justify-content-center text-center   ">
                <div className="imgbox">

                <img className="mt-2" src={firebase} alt="" height="50" />
                <p className="mt-3">FIREBASE</p> 
                </div>
              </div>
            
            </div>
          </div>
       
        </div>
      </div>

      
    </>
  );
};

export default Technologies;
