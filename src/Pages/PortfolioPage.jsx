import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import { NavLink } from 'react-router-dom'
import ContactBox from '../Components/ContactBox'

function PortfolioPage( {apiData} ) {
  return (
    <div>
      <BreadCrumb pageTitle={'MY WORKS'}/>
      <section className="portfolio_page pb_120 xs_pb_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="details_page_header">
              <h2 className="has-animation">
                We create resonant brands and digital experiences that amplify
                your influence to effect change.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {apiData && apiData.user && apiData.user.projects && apiData.user.projects.map((project, index) => (
            <div className="col-12" key={index}>
              <div className="portfolio_large fade_up">
                <NavLink
                  to={'/portfolio_details'}
                  data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                  className="portfolio_large_img"
                >
                  <img
                    src={project.image.url}
                    alt="portfolio"
                    className="img-fluid w-100" />
                </NavLink>
                <div className="portfolio_large_text">
                  <h2 className="has-animation"> <span>{project.title}</span> </h2>
                  <p className="has-animation"><strong>Tech :</strong> {project.techStack.join('-')} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <ContactBox/>
    </div>
  )
}

export default PortfolioPage
