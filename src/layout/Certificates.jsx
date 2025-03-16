import React from 'react';
import cognifyz from "../assets/Images/cognifyzintern.jpeg";
import blueStock from "../assets/Images/bluestock.jpg";
import techwar from "../assets/Images/teckwar.jpg";
import hackthon from "../assets/Images/hackthon.jpeg";

const Certificate = () => {
  return (
    <>
      <div className="ProjectSec">
        <div className="top-boarder"></div>
        <section className="work-process-section" id="processDiv">
          <div className="container">
            <div className="heading-block text-center">
              <div className="btn-container mt-3 mb-4">
                <div className="line"></div>
                <button className="btn">__CERTIFICATES__</button>
              </div>
              <p className="description">
                Here are some of my certifications showcasing my skills, experience, 
                and participation in various tech events and internships.
              </p>
            </div>

            <div className="work-process-block work-process-layout1">
              <div className="row gy-4">
                {/* Cognifyz Internship Certificate */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-content">
                      <div className="icon">
                        <img src={cognifyz} alt="Cognifyz Internship Certificate" height={100} className="img-fluid" />
                      </div>
                      <h3 className="process-title heading4">Cognifyz Internship</h3>
                      <p className="text">
                        Successfully completed an internship at Cognifyz, gaining hands-on experience 
                        in web development and project management.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Another Internship Certificate */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-content">
                      <div className="icon">
                        <img src={blueStock} alt="Internship Certificate" className="img-fluid" />
                      </div>
                      <h3 className="process-title heading4">Internship Certificate</h3>
                      <p className="text">
                        Completed a professional internship, enhancing my technical and problem-solving skills 
                        in a real-world working environment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* TechWar Participation Certificate */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-content">
                      <div className="icon">
                        <img src={techwar} alt="TechWar Participation Certificate" className="img-fluid" />
                      </div>
                      <h3 className="process-title heading4">TechWar Participation</h3>
                      <p className="text">
                        Participated in the TechWar competition organized by Red & White Multimedia,
                        showcasing my creativity and problem-solving abilities in web development.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hackathon Certificate */}
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="vs-work-process text-center p-3 shadow-sm">
                    <div className="work-process-content">
                      <div className="icon">
                        <img src={hackthon} alt="Hackathon Certificate" className="img-fluid" />
                      </div>
                      <h3 className="process-title heading4">Hackathon Participation</h3>
                      <p className="text">
                        Took part in a Hackathon, working on innovative projects under time constraints, 
                        improving my coding and collaboration skills.
                      </p>
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

export default Certificate;
