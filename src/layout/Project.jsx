import React from "react";
import mobileweb from "../assets/Images/mobile-web.png";
import userMenegement from "../assets/Images/user-management.png";
import authentication from "../assets/Images/Sign-in&Sign-up.png";
import TicTocToe from "../assets/Images/tic-tac-toe.png";

const Project = () => {
  return (
    <>
      <div className="ProjectSec">
        <section className="work-process-section" id="processDiv">
          <div className="container">
            <div className="heading-block text-center">
              <h1 className="heading mb-3">__MY PROJECT__</h1>
              <p className="description">
                Exploring creativity through code! Here are some of the exciting
                projects I have worked on, showcasing my skills in web
                development, design, and problem-solving. Every project is a
                step towards mastering the art of building impactful digital
                experiences.
              </p>
            </div>

            <div className="work-process-block work-process-layout1 " >
              <div className="row gy-4">
                {/* Project 1 */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-top">
                      <span className="shape"></span>
                      <span className="number border-white text-white">01</span>
                    </div>
                    <div className="work-process-content">
                      <div className="icon">
                        <img
                          src={mobileweb}
                          alt="Mobile E-commerce Website"
                          className="img-fluid"
                        />
                      </div>
                      <h3 className="process-title heading4" >
                        Mobile E-commerce Website
                      </h3>
                      <p className="text">
                        I developed a responsive product page using React and
                        Bootstrap CSS. The page includes an 'Add to Cart'
                        feature for a seamless shopping experience.
                      </p>
                      <div className="d-flex justify-content-between p-2">
                        <a href="https://github.com/yashraw111/mobile-Shop-website">
                          <i className="fa-brands fa-github"></i> Code
                        </a>
                        <a href="https://mobile-shop-website-sand.vercel.app/">Live</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-top">
                      <span className="shape"></span>
                      <span className="number border-white text-white">02</span>
                    </div>
                    <div className="work-process-content">
                      <div className="icon">
                        <img
                          src={userMenegement}
                          alt="User Management System"
                          className="img-fluid"
                        />
                      </div>
                      <h3 className="process-title heading4">
                        User Management System
                      </h3>
                      <p className="text">
                        A responsive web application to perform CRUD operations
                        (Create, Read, Update, Delete) for user management,
                        featuring a modern UI with form inputs and data display
                        functionality.
                      </p>
                      <div className="d-flex justify-content-between p-2">
                        <a href="https://github.com/yashraw111/yashraw111-React-Redux-User-Management-App">
                          <i className="fa-brands fa-github"></i> Code
                        </a>
                        <a href="https://yashraw111-react-redux-user-management-app.vercel.app/">Live</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-top">
                      <span className="shape"></span>
                      <span className="number border-white text-white">03</span>
                    </div>
                    <div className="work-process-content">
                      <div className="icon">
                        <img
                          src={authentication}
                          alt="Authentication System"
                          className="img-fluid"
                        />
                      </div>
                      <h3 className="process-title heading4">
                        Authentication Google & Facebook
                      </h3>
                      <p className="text">
                        A user-friendly authentication system with options for
                        email-password login, social media integration (Google
                        and Facebook), and account creation, ensuring secure
                        access.
                      </p>
                      <div className="d-flex justify-content-between p-2">
                        <a href="https://github.com/yashraw111/Signup-Signin-google-Auth">
                          <i className="fa-brands fa-github"></i> Code
                        </a>
                        <a href="https://signup-signin-google-auth.vercel.app/">Live</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-top">
                      <span className="shape"></span>
                      <span className="number border-white text-white">04</span>
                    </div>
                    <div className="work-process-content">
                      <div className="icon">
                        <img
                          src={TicTocToe}
                          alt="Tic-Tac-Toe Game"
                          className="img-fluid"
                        />
                      </div>
                      <h3 className="process-title heading4">
                        Tic-Tac-Toe Game
                      </h3>
                      <p className="text">
                        Developed an interactive Tic-Tac-Toe game using React,
                        styled with CSS and Bootstrap 5, featuring a responsive
                        UI and dynamic turn-based gameplay.
                      </p>
                      <div className="d-flex justify-content-between p-2">
                        <a href="https://github.com/yashraw111/Tic-Tac-Toe">
                          <i className="fa-brands fa-github"></i> Code
                        </a>
                        <a href="https://tic-tac-toe-ochre-two-26.vercel.app/">Live</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Project;
