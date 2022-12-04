import React from 'react'

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
                                      <li><a href="/ras"></a>Robotics and Automation Society</li>
                                      <li><a href="/wie">Women in Engineering</a></li>
                                      <li><a href="/cas">Circuits and Systems Society</a></li>
                                      <li><a href="/sps">Signal Processing Society</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-sm-6 col-md-3">
                              <div className="widget widget-text">
                                  <h5 className="widget-title">Reach Us At</h5>
                                  <p><a href="https://twitter.com/ieeensakcet" className="icofont icofont-social-twitter">  Twitter</a></p>
                                  <p><a href="https://www.instagram.com/ieeensakcet/" className="icofont icofont-social-instagram">  Instagram</a></p>
                                  <p><a href="https://www.linkedin.com/company/ieeensakcet/" className="icofont icofont-social-linkedin">  LinkedIn</a></p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <div className="footer-copyright">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6 col-xs-12">
                              <div className="copy-right text-left">© 2022 <span className="gradient-color">IEEE NSAKCET</span> All rights reserved</div>
                          </div>
                          <div className="col-md-6 col-xs-12">
                              <ul className="social-media">
                                  <li><a href="#" className="icofont icofont-social-facebook"></a></li>
                                  <li><a href="#" className="icofont icofont-social-twitter"></a></li>
                                  <li><a href="#" className="icofont icofont-social-behance"></a></li>
                                  <li><a href="#" className="icofont icofont-social-dribble"></a></li>
                                  <li><a href="#" className="icofont icofont-social-linkedin"></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div> */}
          </footer>
    </div>
  )
}

export default footer