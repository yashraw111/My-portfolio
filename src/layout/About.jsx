import React from "react";
import profile from '../assets/Images/myprofileimage.png'
import Education from '../layout/Education'
const About = () => {
  return (
    <div className="AboutSec mt-5">
      <div className="container">
        {/* About Me Section */}
        <div className="AboutMe  mb-5">
          {/* <div class="btn-container mb-4">
            <div class="line"></div>
            <button class="btn">About Me</button>
          </div> */}
          <h2>WHO I AM?</h2>
          <div className="d-flex">

          <p className="mt-3">
            A dedicated Full Stack Web Developer with expertise in both frontend
            and backend technologies, including HTML, CSS, JavaScript,
            Bootstrap, jQuery, Tailwind, React.js, Redux, Node.js, Express.js,
            and MongoDB. Currently advancing skills through a Full Stack
            Development course at Red & White Multimedia. Passionate about
            developing end-to-end web solutions, skilled in creating responsive
            and user-friendly frontend interfaces and implementing robust and
            scalable backend architectures. Proficient in optimizing UI/UX
            designs, ensuring cross-browser compatibility, and integrating APIs
            to enhance application functionality.
          </p>
          <div className="img-sec">

          {/* <img src={profile} alt="" width={100}/> */}
          </div>
          </div>

        </div>
        {/* Education Section */}
        <Education/>
       
      </div>
    </div>
  );
};

export default About;
