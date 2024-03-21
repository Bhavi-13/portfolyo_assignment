import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Awards from '../Components/Awards'
import Experience from '../Components/Experience'
import ContactBox from '../Components/ContactBox'

function AboutMe( {apiData} ) {
  return (
    <div>
      <BreadCrumb pageTitle={'ABOUT ME'}/>
      <About includeSectionHeading={false} apiData={apiData}/>
      <Skills apiData={apiData}/>
      {/* <Awards/> */}
      <Experience apiData={apiData}/>
      <ContactBox/>
    </div>
  )
}

export default AboutMe
