import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import BlogListCom from '../Components/BlogListCom'
import ContactBox from '../Components/ContactBox'

function BlogListPage() {
  return (
    <div>
      <BreadCrumb pageTitle={'BLOG LIST'} />
      <BlogListCom/>
      <ContactBox/>
    </div>
  )
}

export default BlogListPage
