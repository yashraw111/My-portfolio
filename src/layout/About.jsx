import React from "react";

const About = () => {
  return (
    <div className="AboutSec mt-5">
      <div className="container">
        {/* About Me Section */}
        <div className="AboutMe text-center mb-5">
          <h1>About Me</h1>
          <p className="mt-3">
            I'm a dedicated Frontend Developer focusing on creating beautiful
            and user-centric web applications. My toolkit includes HTML, CSS,
            JavaScript, Bootstrap, and React.js. Currently, I'm expanding my
            knowledge in full-stack development and exploring the world of
            backend technologies.
          </p>
        </div>

        {/* Education Section */}
        <div className="Education">
          <h1 className="text-center mb-4">Education</h1>

          {/* Course 1 */}
          <div className="details row border-bottom py-3 align-items-center">
            <div className="col-md-8">
              <h2>Frontend Development</h2>
              <p>
                <i className="fa-solid fa-building"></i> Red & White, YouTube
                <i className="fa-solid fa-location-dot ms-2"></i> Offline
              </p>
            </div>
            <div className="col-md-4 text-end">
              <span className="badge bg-primary">Open To Work</span>
            </div>
          </div>

          {/* Course 2 */}
          <div className="details row border-bottom py-3 align-items-center">
            <div className="col-md-8">
              <h2>Higher Secondary School Certificate</h2>
              <p>
                <i className="fa-solid fa-building"></i> Adarsh High School, Deodar
                <i className="fa-solid fa-location-dot ms-2"></i> Offline
              </p>
            </div>
            <div className="col-md-4 text-end">
              <span className="badge bg-secondary">Full Time</span>
            </div>
          </div>

          {/* Course 3 */}
          <div className="details row border-bottom py-3 align-items-center">
            <div className="col-md-8">
              <h2>Secondary School Certificate</h2>
              <p>
                <i className="fa-solid fa-building"></i> Lokniketan Vinay Mandir, Paldi, Banaskantha
                <i className="fa-solid fa-location-dot ms-2"></i> Offline
              </p>
            </div>
            <div className="col-md-4 text-end">
              <span className="badge bg-secondary">Full Time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
