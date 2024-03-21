import React from 'react'

function Footer({apiData}) {
  return (

    
    <footer id="footer" style={{background: "url(images/golden_bg.jpg)"}}>
      {apiData && (
        <>
     
        <div className="footer_heading">
          <div className="container">
            <ul>
              <li>
                <a href="mailto:portfolio3@gmail.com"> {apiData.user.email} </a>
              </li>
              <li>
                <p>{apiData.user.about.address}</p>
              </li>
              <li>
                <a href="callto:+91-9212321321"> {apiData.user.about.phoneNumber} </a>
              </li>
            </ul>
          </div>
        </div>
    
    
     
      <div className="footer_link">
        <div className="container">
            <ul >
              <li className="fade_bottom" data-trigerId="footer" >
                <a href="#" data-cursor='<i className="fa-brands fa-instagram"></i>'
                  >my Instagram</a
                >
              </li>
            
         
            <li className="fade_bottom" data-trigerId="footer">
              <a href="#" data-cursor='<i className="fa-brands fa-linkedin-in"></i>'
                >my Linkedin</a
              >
            </li>
            <li className="fade_bottom" data-trigerId="footer">
              <a href="#" data-cursor='<i className="fa-brands fa-twitter"></i>'
                >My Twitter</a
              >
            </li>
            <li className="fade_bottom" data-trigerId="footer">
              <a href="#" data-cursor='<i className="fa-brands fa-linkedin-in"></i>'
                >my Facebook</a
              >
            </li>
           
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <div className="footer_copyright_text">
            <p>Copyright © 2023 Petrix. All rights reserved.</p>
            <ul>
              <li>
                <a href="#" className="text_hover_animaiton">Terms & Condition </a>
              </li>
              <li>
                <a href="#" className="text_hover_animaiton">Privacy Policy</a>
              </li>
            </ul>
            <a className="scroll_button" href="#body"
              ><i className="fa-light fa-arrow-up"></i
            ></a>
          </div>
        </div>
      </div>
      </>
      )}
    </footer>
 
    )
}

export default Footer
