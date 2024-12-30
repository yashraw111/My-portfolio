import React from "react";

const Resume = () => {
  return (
    <>
      <div class="resume p-4">
        <header class="text-center">
          <h1>Yash Panchal</h1>
          <p class="center-text">Frontend Developer</p>
          <ul class="list-unstyled contact-info">
            <li>
              <i class="bi bi-phone"></i> 901-659-2413
            </li>
            <li>
              <i class="bi bi-envelope"></i> yashraw111@gmail.com
            </li>
            <li>
              <i class="bi bi-geo-alt"></i> Vastral, Ahmedabad
            </li>
            <li>
              <i class="bi bi-github"></i>{" "}
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
          <h2 class="section-title">Profile Summary</h2>
          <p>
            A dedicated web developer with a strong foundation in HTML, CSS,
            JavaScript, and React.js. Currently advancing skills through a Full
            Stack Development course at Red & White Multimedia. Passionate about
            building responsive, userfriendly web applications and eager to
            contribute effectively to dynamic and innovative projects.
          </p>
        </section>
        {/* 
    <section>
      <h2 class="section-title">Work Experience</h2>
      <div>
        <h5>InfoLabz IT Services Pvt Ltd</h5>
        <p><strong>React Developer Intern</strong> | June 2024 – July 2024</p>
        <ul>
          <li>Completed a 15-day Web Development Internship using React.</li>
          <li>Gained hands-on experience in web development using ReactJS.</li>
          <li>Worked alongside experienced developers to write clean and efficient code.</li>
        </ul>
      </div>
      <div>
        <h5>Aavishkruti Solutions</h5>
        <p><strong>Front-End Development Intern</strong> | May 2024 – June 2024</p>
        <ul>
          <li>Gained knowledge in JavaScript fundamentals necessary for React.js development.</li>
          <li>Completed a comprehensive learning journey from basics to advanced concepts.</li>
        </ul>
      </div>
    </section> */}

        <section>
          <h2 class="section-title">Education</h2>
          <p>
            <strong>Higher Secondary School Certificate</strong>
          </p>
          <p>
            Gujarat Secondary and Higher Secondary Education Board (2022 - 2023)
          </p>
          <p>
            <strong>Secondary School Certificate</strong>
          </p>
          <p>
            Gujarat Secondary and Higher Secondary Education Board (2020 - 2021)
          </p>
        </section>

        <section>
          <h2 class="section-title">Skills</h2>
          <ul>
            <li>
              <strong>Frontend Technologies:</strong> React JS, JavaScript,
              Bootstrap, HTML/CSS, jQuery
            </li>
            <li>
              <strong>Version Control:</strong> Git & GitHub
            </li>
            <li>
              <strong>Languages:</strong> Gujarati (Fluent), Hindi (Fluent),
              English (Intermediate)
            </li>
            <li>
              <strong>Soft Skills:</strong> Leadership, Teamwork, Problem
              Solving, Project Management
            </li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Project Experience</h2>
          <h5>E-commerce Website</h5>
          <ul>
            <li>
              Developed a fully functional e-commerce platform with features
              like product listing, shopping cart, user authentication, and
              order management.
            </li>
            <li>Ensured a responsive UI for a seamless user experience.</li>
            <li>Technologies used: HTML, CSS, JavaScript, React.</li>
          </ul>
          <h5>User Management System</h5>
          <ul>
            <li>
              Developed a full-fledged system with CRUD operations for user
              profiles using React, Axios, and Redux Toolkit.
            </li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Academic Achievements</h2>
          <ul>
            <li>
              Runner-up in TechWar 2024 - CSS Master Competition at Red & White
              Multimedia Education.
            </li>
          </ul>
        </section>

        <section>
          <h2 class="section-title">Hobbies</h2>
          <ul>
            <li>Music</li>
            <li>Coding</li>
            <li>Online Gaming</li>
          </ul>
        </section>
      </div>

      <div className="container">
        <div className="dowloadbtn text-center my-5">
          <button className="mx-auto">
            <a href="src/assets/Images/resume.pdf" download>
              Download Resume
            </a>
          </button>
        </div>
      </div>
      {/* <a href="https://drive.google.com/file/d/1Bp-cr3vvYZZrSC7Ug1HaCBHB-uMZYQ82/view?usp=drive_link"><img src={resume} alt="" /></a> */}
      {/* </div> */}
    </>
  );
};

export default Resume;
