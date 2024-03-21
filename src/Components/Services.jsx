import React from 'react'

function Services ( {apiData} ) {
  return (
    <section className="services pb_120 xs_pb_80" id="service">
    <div className="section_heading section_heading_2">
      <div className="container-fluid">
        <h2>SERVICES<span>SERVICES</span>SERVICES<span>SERVICES</span></h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          {apiData && (
            <div className="services_text mt_105 xs_mt_65">
            <p className="text-anim">
              We specialize in the design and development of your Webflow,
              Shopify or WordPress powered website. Webhosting support through
              Webflow, WP Engine or equivalent. SEO best practices with a
              focus on page speed optimization. Familiarity with MySQL, PHP,
              JavaScript, Cloudflare, and WooCommerce.
            </p>
            {apiData.user.services && apiData.user.services.map((service, index) => (
              <div className="mt_110 xs_mt_70 service_items" key={index}>
                <div className="service_item fade_bottom" data-trigerId="service">
                  <h2>{service.name} <sup>({index + 1 < 10 ? `0${index + 1}` : index + 1})</sup></h2>
                  <a
                    href="service_details.html"
                    className="image-view"
                    data-img-cursor="<img src='images/portfolio_img_7.jpg' />"
                    ><i className="fas fa-eye"></i
                  ></a>
                </div>
              </div>
            ))}
          </div>
          )}
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services
