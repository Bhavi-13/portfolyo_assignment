import React from 'react'

function Services2({apiData}) {
  return (
    <section className="services_page pb_120 xs_pb_80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="details_page_header mb-0">
              <h2 className="has-animation">
                Refined branding and web design strategically created to tell
                your story, make a connection and establish a cutting- edge
                online and offline presence.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {apiData && apiData.user && apiData.user.services && apiData.user.services.map((service, index) => (

          <div className="col-xl-4 col-sm-6">
            <div className="single_services">
              <span>{service.name.charAt(0)}</span>
              <h3> {service.name} </h3>
              <p>
                {service.desc}
              </p>
              <a href="/services_details"
                ><i className="fa-sharp fa-light fa-arrow-up-right"></i
              ></a>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services2
