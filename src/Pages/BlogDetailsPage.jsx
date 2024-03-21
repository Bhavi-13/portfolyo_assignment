import React from 'react'
import BlogDetailsCom from '../Components/BlogDetailsCom'
import ContactBox from '../Components/ContactBox'

function BlogDetailsPage() {
  return (
    <div>
    <section className="breadcrumb breadcrumb_2">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <span>Design</span>
            <h1>Fresh design ideas & inspiration for 2023</h1>
            <ul>
              <li>By Admin</li>
              <li>August 11, 2023</li>
              <li>(0) Comment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <BlogDetailsCom/>
    <ContactBox/>
    </div>
  )
}

export default BlogDetailsPage
