import React from 'react'
import blogImage1 from '../Assets/images/blog_img_1.jpg'
import blogImage2 from '../Assets/images/blog_img_2.jpg'
import blogImage3 from '../Assets/images/blog_img_3.jpg'


function Blog() {
  return (
    <section className="blog pb_125 xs_pb_85" id="blog">
      <div className="section_heading section_heading_2">
        <div className="container-fluid">
          <h2>Our News<span>Our News</span>Our News<span>Our News</span></h2>
        </div>
      </div>
      <div className="container mt_95 xs_mt_55">
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <div className="single_blog fade_left" data-trigerId="blog">
              <h4>August 11, 2023</h4>
              <a className="title" href="blog_details.html"
                >Fresh design ideas & inspiration for 2023</a
              >
              <p>
                Duis aute irure dolor in reprehenderit velit esse cillum dolore
                eu fugiat
              </p>
              <a
                href="blog_details.html"
                data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                className="img hover_img"
              >
                <div className="img-box">
                  <img
                    src={blogImage1}
                    alt="blog"
                    className="img-fluid" />
                  <img
                    src={blogImage1}
                    alt="blog"
                    className="img-fluid" />
                </div>
              </a>
              <a className="read_btn" href="blog_details.html">read more</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_blog fade_left" data-trigerId="blog">
              <h4>August 11, 2023</h4>
              <a className="title" href="blog_details.html"
                >What are the new trends in web design?</a
              >
              <p>
                Duis aute irure dolor in reprehenderit velit esse cillum dolore
                eu fugiat
              </p>
              <a
                href="blog_details.html"
                data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                className="img hover_img"
              >
                <div className="img-box">
                  <img
                    src={blogImage2}
                    alt="blog"
                    className="img-fluid" />
                  <img
                    src={blogImage2}
                    alt="blog"
                    className="img-fluid" />
                </div>
              </a>
              <a className="read_btn" href="blog_details.html">read more</a>
            </div>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="single_blog fade_left" data-trigerId="blog">
              <h4>August 11, 2023</h4>
              <a className="title" href="blog_details.html"
                >Fresh design ideas & inspiration for 2023</a
              >
              <p>
                Duis aute irure dolor in reprehenderit velit esse cillum dolore
                eu fugiat
              </p>
              <a
                href="blog_details.html"
                data-cursor="<i className='fa-sharp fa-light fa-arrow-up-right'></i>"
                className="img hover_img"
              >
                <div className="img-box">
                  <img
                    src={blogImage3}
                    alt="blog"
                    className="img-fluid" />
                  <img
                    src={blogImage3}
                    alt="blog"
                    className="img-fluid" />
                </div>
              </a>
              <a className="read_btn" href="blog_details.html">read more</a>
            </div>
          </div>
          <div className="col-12 text-center mt_60">
            <a className="common_btn btn_hover" href="blog_details.html"
              >Explore Our Blog</a
            >
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
