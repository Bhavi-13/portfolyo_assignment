import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import ServicesDetail1 from '../Components/ServicesDetail1'
import ContactBox from '../Components/ContactBox'

function ServiceDetails({apiData}) {
  return (
    <div>
      <BreadCrumb pageTitle={'APP DEVELOPMENT'}/>
      <ServicesDetail1 apiData={apiData} />
      <ContactBox/>
    </div>
  )
}

export default ServiceDetails
