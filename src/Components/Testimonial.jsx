import React from 'react'

function Testimonial( {apiData} ) {
  return (
    <section
      class="testimonial pb_120 xs_pb_80"
    //   style="background: url(images/golden_bg.jpg)"
    >
      <div class="section_heading section_heading_2">
        <div class="container-fluid">
          <h2>
            testimonial<span>testimonial</span>testimonial<span>testimonial</span>
          </h2>
        </div>
      </div>
      <div class="container mt_120 xs_mt_80">
        <div class="row">
          <div class="col-xl-11 m-auto">
            <div class="testimonial_bg">
              <div class="row testi_slider">
              {apiData && apiData.user && apiData.user.testimonials && apiData.user.testimonials.map((testimonial,index) => (
                  <div class="col-12" key={index}>
                   <div class="testimonial_content">
                     <div class="testimonial_img">
                       <img
                         src={testimonial.image.url}
                         alt="testimonial"
                         class="img-fluid" />
                     </div> 
                     <div class="testimonial_text">
                       <p>
                         {testimonial.review}
                       </p>
                       <h4> {testimonial.name} </h4>
                       <span> {testimonial.position} </span>
                     </div>
                   </div>
                 </div>
              )) }
              </div>
            </div>
          </div>
       
        </div>
      
      </div>
    </section>
  )
}

export default Testimonial


