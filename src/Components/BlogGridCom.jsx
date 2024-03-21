import blogGridImage1 from '../Assets/images/blog_img_1.jpg'
import blogGridImage2 from '../Assets/images/blog_img_2.jpg'
import blogGridImage3 from '../Assets/images/blog_img_3.jpg'
import blogGridImage4 from '../Assets/images/blog_img_4.jpg'
import blogGridImage5 from '../Assets/images/blog_img_5.jpg'
import blogGridImage6 from '../Assets/images/blog_img_6.jpg'

function BlogGridCom() {
  return (
    <section className="blog_grid pb_120 xs_pb_80" id="blog">
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-md-6">
          <div className="single_blog fade_up">
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
                  src={blogGridImage1}
                  alt="blog"
                  className="img-fluid" />
                <img
                  src={blogGridImage1}
                  alt="blog"
                  className="img-fluid" />
              </div>
            </a>
            <a className="read_btn" href="blog_details.html">read more</a>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="single_blog fade_up">
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
                  src={blogGridImage2}
                  alt="blog"
                  className="img-fluid" />
                <img
                  src={blogGridImage2}
                  alt="blog"
                  className="img-fluid" />
              </div>
            </a>
            <a className="read_btn" href="blog_details.html">read more</a>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="single_blog fade_up">
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
                  src={blogGridImage3}
                  alt="blog"
                  className="img-fluid" />
                <img
                  src={blogGridImage3}
                  alt="blog"
                  className="img-fluid" />
              </div>
            </a>
            <a className="read_btn" href="blog_details.html">read more</a>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="single_blog fade_up">
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
                  src={blogGridImage4}
                  alt="blog"
                  className="img-fluid" />
                <img
                  src={blogGridImage4}
                  alt="blog"
                  className="img-fluid" />
              </div>
            </a>
            <a className="read_btn" href="blog_details.html">read more</a>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="single_blog fade_up">
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
                  src={blogGridImage5}
                  alt="blog"
                  className="img-fluid" />
                <img
                  src={blogGridImage5}
                  alt="blog"
                  className="img-fluid" />
              </div>
            </a>
            <a className="read_btn" href="blog_details.html">read more</a>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="single_blog fade_up">
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
                  src={blogGridImage6}
                  alt="blog"
                  className="img-fluid" />
                <img
                  src={blogGridImage6}
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
  </section>
  )
}

export default BlogGridCom
