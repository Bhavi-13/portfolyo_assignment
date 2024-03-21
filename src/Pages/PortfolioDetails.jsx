import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import ContactBox from '../Components/ContactBox'


function PortfolioDetails( {apiData} ) {
  return (
    <div>
    <BreadCrumb pageTitle={'PROJECT 14'} />
      <section className="portfolio_details pb_120 xs_pb_80">
      <div className="container">
        {apiData && (
          <div className="row">
          <div className="col-xl-12">
            <ul className="portfolio_details_header">
              <li>
                <h4>Client :</h4>
                <p>Gerard Peano</p>
              </li>
              <li>
                <h4>Category :</h4>
                <p>{apiData.user.projects[0].title}</p>
              </li>
              <li>
                <h4>date :</h4>
                <p>02 May, 2023</p>
              </li>
              <li>
                <h4>location :</h4>
                <p>Broklyn, New York</p>
              </li>
              <li>
                <h4>Follow :</h4>
                <div className="link">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="portfolio_details_img fade_up">
              <img
                src={apiData.user.projects[0].image.url}
                alt="portfolio details"
                className="img-fluid w-100" />
            </div>
          </div>
          <div className="col-12">
            <div className="portfolio_details_text">
              <h2 className="has-animation">
                We create everything digital, printable and analytical.
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden middle of text. All the generators on the Internet tend
                to repeat predefined chunks as necessary.
              </p>
              <p>
                Making this the first true generator on the Internet. It uses a
                dictionary of over combined with a handful of structures, to
                generate Lorem Ipsum which reasonable. the generated Lorem Ipsum
                is therefore always free from injected humour, or
                non-characteristic words etc
              </p>
              <h2 className="has-animation">Solution & Result</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the generators on the Internet
                tend to repeat predefined chunks as necessary
              </p>
              <p>
                Making this the first true generator on the Internet. It uses a
                dictionary of over combined with a handful of structures, to
                generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from injected humour, or
                non-characteristic words etc.
              </p>
            </div>
          </div>
          <div className="col-6 col-xl-6">
            <div className="portfolio_details_center_img fade_up">
              <img
                src={apiData.user.projects[2].image.url}
                alt="poerfolio"
                className="img-fluid w-100" />
            </div>
          </div>
          <div className="col-6 col-xl-6">
            <div className="portfolio_details_center_img fade_up">
              <img
                src={apiData.user.projects[4].image.url}
                alt="poerfolio"
                className="img-fluid w-100" />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="portfolio_details_center_img fade_up">
              <img
                src={apiData.user.projects[6].image.url}
                alt="poerfolio"
                className="img-fluid w-100" />
            </div>
          </div>
        </div>
        )}
        
      </div>
    </section>
    <ContactBox/>
    </div>
  )
}

export default PortfolioDetails
