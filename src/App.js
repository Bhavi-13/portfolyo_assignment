import React, {useState, useEffect} from 'react'

import './Assets/css/plugin.css'
import './Assets/css/icon.css'
import './Assets/css/responsive.css'
import './Assets/css/spacing.css'
import './Assets/css/style.css'
import './Assets/css/animationsStyle.css'

import './Assets/icons/svg/arrow.svg'
import './Assets/icons/svg/down.svg'
import './Assets/icons/svg/long-down-arrow.svg'
import './Assets/icons/svg/long-up-arrow.svg'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './Components/Menu'
import Footer from './Components/Footer.jsx'
import MagicCursor from './Components/MagicCursor.jsx'
import Preloader from './Components/Preloader.jsx'

import Home from './Pages/Home.jsx'
import AboutMe from './Pages/AboutMe.jsx'
import PortfolioPage from './Pages/PortfolioPage.jsx'
import PortfolioDetails from './Pages/PortfolioDetails.jsx'
import ServicesPage from './Pages/ServicesPage.jsx'
import ServiceDetails from './Pages/ServiceDetails.jsx'
import BlogGridPage from './Pages/BlogGridPage.jsx'
import BlogListPage from './Pages/BlogListPage.jsx'
import BlogDetailsPage from './Pages/BlogDetailsPage.jsx'
import Contact from './Pages/Contact.jsx'


function App() {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(data => {
        setApiData(data);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching API data:', error);
      });
  }, []);


  return (
    <Router>
      <MagicCursor/>
      <Menu />
      <Routes>
          <Route path={"/"} element={<Home apiData={apiData} />} />
          <Route path={"/aboutMe"} element={<AboutMe apiData={apiData} />} />
          <Route path={'/portfolio'} element={<PortfolioPage apiData={apiData} />} />
          <Route path={'/portfolio_details'} element={<PortfolioDetails apiData={apiData} />} />
          <Route path={'/services'} element={<ServicesPage apiData={apiData} />} />
          <Route path={'/services_details'} element={<ServiceDetails apiData={apiData} />} />
          <Route path={'/blog_grid'} element={<BlogGridPage/>} />
          <Route path={'/blog_list'} element={<BlogListPage/>} />
          <Route path={'/blog_details'} element={<BlogDetailsPage/>} />
          <Route path={'/contactUs'} element={<Contact apiData={apiData}/>} />
      </Routes>
      <Footer apiData={apiData} />
    </Router>
    // <div>
    //   {/* <Preloader/> */}
    //   <MagicCursor/>

    // </div>
  )
}

export default App
