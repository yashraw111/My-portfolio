import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="Header ">
        <nav class="navbar navbar-expand-lg navbar-light  ">
          <div class="container ">
            <h2 class="navbar-brand " href="#">
              Yash
            </h2>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink to="/" className="text-decoration-none">
                    <a class="nav-link " aria-current="page" href="#">
                      Home
                    </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/About" className="text-decoration-none">
                    <a class="nav-link " aria-current="page" href="#">
                      About
                    </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/technologies" className="text-decoration-none">
                    <a class="nav-link " aria-current="page" href="#">
                      Technologies
                    </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/Project" className="text-decoration-none">
                    <a class="nav-link    " aria-current="page" href="#">
                      Projects
                    </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/contact" className="text-decoration-none">
                    <a class="nav-link    " aria-current="page" href="#">
                      Contact
                    </a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/resume" className="text-decoration-none">
                    <a class="nav-link    " aria-current="page" href="#">
                      Resume
                    </a>
                  </NavLink>
                </li>
              </ul>

              <div className="social">
                <a href="https://github.com/yashraw111" target="blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="#" target="blank">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/yash-panchal-6985312b0/">
                  <i class="fa-brands fa-linkedin-in" target="blank"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
