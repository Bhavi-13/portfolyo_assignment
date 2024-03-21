import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import BlogGridCom from '../Components/BlogGridCom'
import ContactBox from '../Components/ContactBox'

function BlogGridPage() {
  return (
    <div>
      <BreadCrumb pageTitle={'ARTICLES'} />
      <BlogGridCom/>
      <ContactBox/>
    </div>
  )
}

export default BlogGridPage
