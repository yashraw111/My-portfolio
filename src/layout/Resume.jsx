import React from "react";

const Resume = () => {
  return (
    <>
      <div className="resume p-4">
        <header className="text-center">
          <h1>Yash Panchal</h1>
          <p className="center-text">Full Stack Developer</p>
          <ul className="list-unstyled contact-info">
            <li>
              <i className="bi bi-phone"></i> 901-659-2413
            </li>
            <li>
              <i className="bi bi-envelope"></i> yashraw111@gmail.com
            </li>
            <li>
              <i className="bi bi-geo-alt"></i> Vastral, Ahmedabad
            </li>
            <li>
              <i className="bi bi-github"></i>{" "}
              <a
                className="text-decoration-none text-dark"
                href="https://github.com/yashraw111"
              >
                github.com/yashpanchal
              </a>
            </li>
          </ul>
        </header>
        
        <section>
          <h2 className="section-title">Profile Summary</h2>
          <p>
            A dedicated Full Stack Developer with expertise in **React.js, Node.js, Express.js, and MongoDB**. 
            Currently advancing skills through a Full Stack Development course at **Red & White Multimedia**. 
            Passionate about building **scalable, responsive, and efficient web applications**, with a strong 
            understanding of both frontend and backend technologies.
          </p>
        </section>

        <section>
          <h2 className="section-title">Education</h2>
          <p>
            <strong>Higher Secondary School Certificate</strong>
          </p>
          <p>Gujarat Secondary and Higher Secondary Education Board (2022 - 2023)</p>
          <p>
            <strong>Secondary School Certificate</strong>
          </p>
          <p>Gujarat Secondary and Higher Secondary Education Board (2020 - 2021)</p>
        </section>

        <section>
          <h2 className="section-title">Skills</h2>
          <ul>
            <li>
              <strong>Frontend Technologies:</strong> React JS, JavaScript, Bootstrap, HTML/CSS, jQuery
            </li>
            <li>
              <strong>Backend Technologies:</strong> Node.js, Express.js, REST APIs
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, Firebase
            </li>
            <li>
              <strong>Version Control:</strong> Git & GitHub
            </li>
            <li>
              <strong>Languages:</strong> Gujarati (Fluent), Hindi (Fluent), English (Intermediate)
            </li>
            <li>
              <strong>Soft Skills:</strong> Leadership, Teamwork, Problem Solving, Project Management
            </li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Project Experience</h2>
          <h5>E-commerce Website</h5>
          <ul>
            <li>
              Developed a fully functional **MERN-based** e-commerce platform with features like product 
              listing, shopping cart, user authentication, and order management.
            </li>
            <li>Integrated **JWT authentication** for secure user login.</li>
            <li>Ensured a responsive UI using React & Bootstrap.</li>
            <li>Technologies used: React.js, Node.js, Express.js, MongoDB.</li>
          </ul>

          <h5>User Management System</h5>
          <ul>
            <li>
              Developed a full-fledged system with **CRUD operations** for user profiles using 
              React, Axios, and Redux Toolkit.
            </li>
            <li>Implemented **secure REST API endpoints** using Express.js.</li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Academic Achievements</h2>
          <ul>
            <li>
              Runner-up in TechWar 2024 - CSS Master Competition at Red & White Multimedia Education.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="section-title">Hobbies</h2>
          <ul>
            {/* <li>Music</li> */}
            <li>Coding</li>
            <li>Online Gaming</li>
          </ul>
        </section>
      </div>

      <div className="container">
        <div className="dowloadbtn text-center my-5">
          <button className="mx-auto">
            <a href="../assets/Images/mern resume (1).pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Resume;
