import React, {useState} from "react";


function About({apiData, includeSectionHeading = true}) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="about"
      id="about"
      style={{
        backgroundImage: "url('../Components/Assets/images/golden_bg.jpg')",
        backgroundSize: 'cover',
      }}
    >
      {includeSectionHeading && (
        <div
        className="section_heading"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-fluid">
        <h2 className={`marquee ${isHovered ? "pause" : ""}`}>
          <span>about me </span>
          <span className="white-text">about me </span>
          <span>about me </span>
          <span className="white-text">about me </span>
        </h2>
        </div>
      </div>
      )}
      <div className="about_text_area pt_120 xs_pt_80 pb_120 xs_pb_80">
        <div className="container">
          {apiData && (
            <div className="row">
            <div className="col-xl-5 col-md-6">
              <div className="about_img">
                <img src={apiData.user.about.avatar.url} alt="about" className="img-fluid" />
              </div>
            </div>
            <div className="col-xl-7 col-md-6">
              <div className="about_text">
                <p className="description text-anim">
                  {apiData.user.about.description}
                </p>
                <ul>
                  <li className="fade_right" data-trigerId="about">
                    <h2>
                      <span className="counter"> {apiData.user.about.exp_year} </span>
                    </h2>
                    <p>Years of experience</p>
                  </li>
                  <li className="fade_right" data-trigerId="about">
                    <h2>
                      <span className="counter">1</span>K+
                    </h2>
                    <p>Successful Projects</p>
                  </li>
                  <li className="fade_right" data-trigerId="about">
                    <h2>
                      <span className="counter">20</span>+
                    </h2>
                    <p>Honors and Awards</p>
                  </li>
                </ul>
                <a className="common_btn btn_hover" data-trigerId="about" href="#">
                  download CV
                </a>
              </div>
            </div>
          </div>
          )}
          
        </div>
      </div>
    </section>
  );
}

export default About;
