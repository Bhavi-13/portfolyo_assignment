import React from 'react'

function Portfolio( {apiData} ) {
  return (
    <section className="portfolio pb_120 xs_pb_80" id="portfolio">
      <div className="section_heading section_heading_2">
        <div className="container-fluid">
          <h2>
            PORTFOLIO<span>PORTFOLIO</span>PORTFOLIO<span>PORTFOLIO</span>
          </h2>
        </div>
      </div>
      <div className="container portfolio_items">
        <div className="row justify-content-between">
        {apiData && apiData.user && apiData.user.projects && apiData.user.projects.slice(0, 6).map((project, index) => (
            <div className="col-xl-6 col-md-6" key={index}>
              <a
                href={""}
                className={`portfolio_item mt_120 xs_mt_80 hover_img h-400`}
                data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
              >
                <div className="img-box">
                  <img
                    src={project.image.url}
                    alt="portfolio"
                    className="img-fluid"
                  />
                  <img
                    src={project.image.url}
                    alt="portfolio"
                    className="img-fluid img"
                    data-speed="0.3"
                  />
                </div>

                <div className="text">
                 
                  <span><strong>Tech:</strong> {project.techStack.join(",")}</span>
                  <p>{project.title}</p>
                </div>
              </a>
            </div>
          ))}

          <div className="col-12 text-center mt_120 xs_mt_80">
            <a className="see_portfolio circle_btn" href="/portfolio">
              <i className="fa-sharp fa-light fa-arrow-up-right"></i> See All Recent
              Projects</a
            >
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
