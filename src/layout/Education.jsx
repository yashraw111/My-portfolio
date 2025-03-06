import React from 'react'

const education = () => {
  return (
   <>
    <div className="Education ">
        <div class="btn-container mb-4">
            <div class="line"></div>
            <button class="btn">Education Me</button>
          </div>

          {/* Course 1 */}
          <div className="details row border-bottom py-3 align-items-center">
            <div className="col-md-8 col-sm-12">
              <h2>Frontend Development</h2>
              <p>
                <i className="fa-solid fa-building"></i> Red & White, YouTube
                <i className="fa-solid fa-location-dot ms-2"></i> Offline
              </p>
            </div>
            <div className="col-md-4 text-end col-sm-12">
              <span className="badge bg-primary">Open To Work</span>
            </div>
          </div>

          {/* Course 2 */}
          <div className="details row border-bottom py-3 align-items-center">
            <div className="col-md-8">
              <h2>Higher Secondary School Certificate</h2>
              <p>
                <i className="fa-solid fa-building"></i> Adarsh High School,
                Deodar
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
                <i className="fa-solid fa-building"></i> Lokniketan Vinay
                Mandir, Paldi, Banaskantha
                <i className="fa-solid fa-location-dot ms-2"></i> Offline
              </p>
            </div>
            <div className="col-md-4 text-end">
              <span className="badge bg-secondary">Full Time</span>
            </div>
          </div>
        </div>
   </>
  )
}

export default education