import React from 'react'
import Services2 from '../Components/Services2'
import BreadCrumb from '../Components/BreadCrumb'
import PricingPlan from '../Components/PricingPlan'
import FAQ from '../Components/FAQ'
import ContactBox from '../Components/ContactBox'

function ServicesPage({apiData}) {
  return (
    <div>
      <BreadCrumb pageTitle={'SERVICES'} />
      <Services2 apiData={apiData} />
      <PricingPlan/>
      <FAQ/>
      <ContactBox/>
    </div>
  )
}

export default ServicesPage
