import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const footer = () => {
  return (
      <div>
          <footer className="footer">
              <div className="footer-main">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-6 col-md-3">
                              <div className="widget widget-text">
                                  <h5 className="widget-title">Contact Info</h5>
                                  <div className="contact-detail">
                                      <ul>
                                          <li><i className="icofont icofont-location-pin" style={{
                                              color: "#c31434",
                                          }}></i>16-4-1, New Malakpet, Near Railway Station, Hyderabad, Telangana, India, 500024</li>
                                          <li><i className="icofont icofont-ui-call" style={{
                                              color: "#c31434",
                                          }}></i>+91 8500752481</li>
                                          <li><i className="icofont icofont-envelope " style={{
                                              color: "#c31434",
                                          }}></i>ieeensakcet@gmail.com</li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="col-sm-6 col-md-2">
                              <div className="widget widget-links">
                                  <h5 className="widget-title">Useful Links</h5>
                                  <ul>
                                      <li><a href="/">Home</a></li>
                                      <li><a href="/aboutUs">About Us</a></li>
                                      <li><a href="/team">Team</a></li>
                                      <li><a href="/joinUs">Join Us</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                              <div className="widget widget-links">
                                  <h5 className="widget-title">Our Chapters</h5>
                                  <ul>
                                      <li><a href="/cs">Computer Society</a></li>
                                      <li><a href="/ras">Robotics and Automation Society</a></li>
                                      <li><a href="/wie">Women in Engineering</a></li>
                                      <li><a href="/cas">Circuits and Systems Society</a></li>
                                      <li><a href="/sps">Signal Processing Society</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                              <div className="widget widget-links">
                                  <h5 className="widget-title">Reach Us At</h5>
                                  <p><a href="https://twitter.com/ieeensakcet"> <TwitterIcon style={{
                                      color: "#ffffff",
                                      fontSize: "22px",
                                      textDecoration: "none",
                                      justifyContent: "center",
                                      paddingRight:"5px"

                                  }} /> Twitter</a></p>
                                  <p><a href="https://www.instagram.com/ieeensakcet/" ><InstagramIcon style={{
                                      color: "#ffffff",
                                      fontSize: "22px",
                                      textDecoration: "none",
                                      justifyContent: "center",
                                      paddingRight: "5px"
                                  }} />  Instagram</a></p>

                                  <p><a href="https://www.linkedin.com/company/ieeensakcet/"><LinkedInIcon style={{
                                      color: "#ffffff",
                                      fontSize: "22px",
                                      textDecoration: "none",
                                      justifyContent: "center",
                                      paddingRight: "5px"
                                  }} />  LinkedIn</a></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='creditSection dark' mb-20 pb-0>
                  <h1 className=' font-italic developer' >Designed and developed by <a href='https://affan880.github.io/' className='developerName' > Syed Affan </a><span style={{
                      textAlign: "center",
                      float:"right",
                      paddingRight: "10%",
                      marginBottom:"30%"
                  }}>© 2023 IEEE NSAKCET. All Rights Reserved.</span>  </h1>
              </div>
                                  
                                  
          </footer>
    </div>
  )
}

export default footer
