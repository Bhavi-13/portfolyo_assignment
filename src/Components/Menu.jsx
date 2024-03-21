import { NavLink } from 'react-router-dom'
import logo from '../Assets/images/logo.png'

function Menu() {
  return (
   
      <nav className="navbar navbar-expand-lg main_menu">
        <div className="container container_large">
          <NavLink className="navbar-brand" to={'/'}>
            <img src={logo} alt="Petrix" className="img-fluid w-100" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-sharp fa-sharp fa-regular fa-bars menu_icon_bar"></i>
            <i className="fa-regular fa-xmark close_icon_close"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <NavLink className="nav-link text_hover_animaiton" to={'/'}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_hover_animaiton" to={'/aboutMe'}>About Me</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_hover_animaiton" to={"#"}>Portfolio <i className="far fa-angle-down"></i></NavLink>
                <ul className="droap_menu">
                  <li><NavLink to={'/portfolio'} className="submenu">Portfolio</NavLink></li>
                  <li><NavLink to={'/portfolio_details'} className="submenu">Portfolio Details</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_hover_animaiton" to={"#"}>Services <i className="far fa-angle-down"></i></NavLink>
                <ul className="droap_menu">
                  <li><NavLink to={'/services'} className="submenu">Services</NavLink></li>
                  <li><NavLink to={'/services_details'} className="submenu">Service Details</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_hover_animaiton" to={"#"}>Blog <i className="far fa-angle-down"></i></NavLink>
                <ul className="droap_menu">
                  <li><NavLink to={'/blog_grid'} className="submenu">Blog Grid</NavLink></li>
                  <li><NavLink to={'/blog_list'} className="submenu">Blog List</NavLink></li>
                  <li><NavLink to={'blog_details'} className="submenu">Blog Details</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text_hover_animaiton" to={'contactUs'}>Contact</NavLink>
              </li>
            </ul>
            <div className="right_menu">
              <NavLink to={'/contactUs'} className="btn_hover">Let's Talk</NavLink>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Menu
