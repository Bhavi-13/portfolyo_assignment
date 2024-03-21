import React from 'react'

function Experience( {apiData} ) {

   // Function to extract year from date string
   const getYearFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  return (
    <section className="experience pt_90 xs_pt_50 pb_120 xs_pb_80" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="experience_text fade_left" data-trigerId="experience">
              <h2>
                <i className="fa-sharp fa-solid fa-graduation-cap"></i>
                <span className="has-animation">My Education</span>
              </h2>
              <ul>
                <li>
                  <div className="title">
                    <span>2015 - 2017</span>
                  </div>
                  <div className="title">
                    <h3>Programming Course</h3>
                    <p>Harvard University</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <span>2014 - 2015</span>
                  </div>
                  <div className="title">
                    <h3>Cognitive Sciences</h3>
                    <p>University of California</p>
                  </div>
                </li>
                <li>
                  <div className="title">
                    <span>2013 - 2014</span>
                  </div>
                  <div className="title">
                    <h3>Web Design Course</h3>
                    <p>Bigtown, England</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {apiData && (
            <div className="col-xl-6 col-lg-6">
              <div className="experience_text fade_right" data-trigerId="experience">
                <h2>
                  <i className="fa-solid fa-briefcase-blank"></i>
                  <span className="has-animation">My Experience</span>
                </h2>
                <ul>
                  {/* Dynamically render experience details */}
                  {apiData.user.timeline && apiData.user.timeline.map((experience, index) => (
                    <li key={index}>
                      <div className="title">
                        <span>{getYearFromDate(experience.startDate)} - {getYearFromDate(experience.endDate)}</span>
                      </div>
                      <div className="title">
                        <h3>{experience.jobTitle}</h3>
                        <p>{experience.company_name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
