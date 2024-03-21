import React from 'react'
import portfolioImage7 from '../Assets/images/portfolio_img_7.jpg'
import portfolioImage9 from '../Assets/images/portfolio_img_9.jpg'
import portfolioImage11 from '../Assets/images/portfolio_img_11.jpg'
import portfolioImage12 from '../Assets/images/portfolio_img_12.jpg'
import blogGridImage2 from '../Assets/images/blog_img_2.jpg'
import blogGridImage3 from '../Assets/images/blog_img_3.jpg'
import blogGridImage5 from '../Assets/images/blog_img_5.jpg'


function BlogListCom() {
  return (
    <section className="blog_list pb_120 xs_pb_80" id="blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-xl-12">
                <div className="blog_list_item fade_up">
                  <h4>August 11, 2023</h4>
                  <a className="title" href="blog_details.html"
                    >Fresh design ideas & inspiration for 2023</a
                  >
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat excepteur sint occaecat
                    cupidatat non proident,
                  </p>
                  <a
                    href="blog_details.html"
                    data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                    className="img hover_img"
                  >
                    <div className="img-box">
                      <img
                        src={portfolioImage7}
                        alt="blog"
                        className="img-fluid" />
                      <img
                        src={portfolioImage7}
                        alt="blog"
                        className="img-fluid" />
                    </div>
                  </a>
                  <a className="read_btn" href="blog_details.html">read more</a>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="blog_list_item fade_up">
                  <h4>August 11, 2023</h4>
                  <a className="title" href="blog_details.html"
                    >What are the new trends in web design?</a
                  >
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat excepteur sint occaecat
                    cupidatat non proident,
                  </p>
                  <a
                    href="blog_details.html"
                    data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                    className="img hover_img"
                  >
                    <div className="img-box">
                      <img
                        src={portfolioImage9}
                        alt="blog"
                        className="img-fluid" />
                      <img
                        src={portfolioImage9}
                        alt="blog"
                        className="img-fluid" />
                    </div>
                  </a>
                  <a className="read_btn" href="blog_details.html">read more</a>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="blog_list_item fade_up">
                  <h4>August 11, 2023</h4>
                  <a className="title" href="blog_details.html"
                    >Fresh design ideas & inspiration for 2023</a
                  >
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat excepteur sint occaecat
                    cupidatat non proident,
                  </p>
                  <a
                    href="blog_details.html"
                    data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                    className="img hover_img"
                  >
                    <div className="img-box">
                      <img
                        src={portfolioImage12}
                        alt="blog"
                        className="img-fluid" />
                      <img
                        src={portfolioImage12}
                        alt="blog"
                        className="img-fluid" />
                    </div>
                  </a>
                  <a className="read_btn" href="blog_details.html">read more</a>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="blog_list_item fade_up">
                  <h4>August 11, 2023</h4>
                  <a className="title" href="blog_details.html"
                    >What are the new trends in web design?</a
                  >
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat excepteur sint occaecat
                    cupidatat non proident,
                  </p>
                  <a
                    href="blog_details.html"
                    data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                    className="img hover_img"
                  >
                    <div className="img-box">
                      <img
                        src={portfolioImage11}
                        alt="blog"
                        className="img-fluid" />
                      <img
                        src={portfolioImage11}
                        alt="blog"
                        className="img-fluid" />
                    </div>
                  </a>
                  <a className="read_btn" href="blog_details.html">read more</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ul className="pagination mt_35">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <i className="fa-light fa-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <i className="fa-light fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar" id="sticky_sidebar">
              <div className="sidebar_search">
                <form>
                  <input type="text" placeholder="Search" />
                  <button type="submit">
                    <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="sidebar_services">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="service_details.html">Agency Solution</a>
                  </li>
                  <li><a href="service_details.html">Digital</a></li>
                  <li><a href="service_details.html">Creative Agency</a></li>
                  <li><a href="service_details.html">Software</a></li>
                </ul>
              </div>
              <div className="sidebar_post">
                <h3>Recent Posts</h3>
                <ul>
                  <li>
                    <div className="img">
                      <img
                        src={blogGridImage5}
                        alt="blog"
                        className="img-fluid w-100" />
                    </div>
                    <div className="text">
                      <p>August 19, 2023</p>
                      <a href="blog_details.html"
                        >Fresh design ideas & inspiration for 2023</a
                      >
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img
                        src={blogGridImage3}
                        alt="blog"
                        className="img-fluid w-100"/>
                    </div>
                    <div className="text">
                      <p>August 19, 2023</p>
                      <a href="blog_details.html"
                        >Fresh design ideas & inspiration for 2023</a
                      >
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img
                        src={blogGridImage2}
                        alt="blog"
                        className="img-fluid w-100" />
                    </div>
                    <div className="text">
                      <p>August 19, 2023</p>
                      <a href="blog_details.html"
                        >Fresh design ideas & inspiration for 2023</a
                      >
                    </div>
                  </li>
                </ul>
              </div>
              <div className="sidebar_tags">
                <h3>Popular Tags</h3>
                <ul>
                  <li><a href="#">Agency</a></li>
                  <li><a href="#">Financials</a></li>
                  <li><a href="#">Man</a></li>
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Digital</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogListCom
