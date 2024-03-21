import React, { useState, useEffect } from 'react'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Awards from '../Components/Awards'
import Experience from '../Components/Experience'
import Portfolio from '../Components/Portfolio'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'
import Blog from '../Components/Blog'
import ContactBox from '../Components/ContactBox'

function Home( {apiData} ) {

  // const [apiData, setApiData] = useState(null);

  // useEffect(() => {
  //   fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
  //     .then(response => response.json())
  //     .then(data => {
  //       setApiData(data);
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching API data:', error);
  //     });
  // }, []);


  return (
      <div>
        <Banner apiData={apiData} />
        <About apiData={apiData} />
        <Skills apiData={apiData} />
        {/* <Awards/> */}
        <Experience apiData={apiData} />
        <Portfolio apiData={apiData} />
        <Services apiData={apiData} />
        <Testimonial apiData={apiData} />
        {/* <Blog/> */}
        <ContactBox apiData={apiData} />
      </div>
  )
}

export default Home
