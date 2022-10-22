import React from 'react'
import Nsakcet from "../../../assets/img/Nsakcet.jpg"
import CsLogo from "../../../assets/img/CS-logo.jpg"
import { cs } from "../../../assets/data/profile";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';

const CS = () => {
    const desc = (
        <div>
         <h5 class="gradient-color mt-30">IEEE Computer Society .<br /> is a professional society of IEEE its purpose and scope is</h5>
          <h5 class="grey-color mt-20">is a professional society of IEEE its purpose and scope is “To advance the theory, practice, and application of computer and information processing science and technology” and the “professional standing of its members.”</h5>
            <p class="mt-50"><a class="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
  return (
      <div className='wrapper' >
         
          <LandingScreen chaptersGroupPhoto={Nsakcet} chapterName={"IEEE Computer Society"} chapterLogo={CsLogo} Description={desc} themeColor={"#FFA300"} />
          <section class="white-bg pb-60">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-8 section-heading">
                          <h5 class="default-color mt-0 text-uppercase">Our Services</h5>
                          <h2 class="mt-0 font-700"><span class="gradient-color">"</span> We Are Web Design Agency Based on Sydney, <span class="gradient-color">Australia.</span></h2>
                      </div>
                  </div>
                  <div class="row service-box-style-01 mt-50">
                      <div class="col-md-4 col-sm-6">
                          <div class="feature-box text-left mb-50 feature-box-square center-feature">
                              <i class="icon-tools-2 font-40px default-color"></i>
                              <h4 class="mt-0 font-600">Design</h4>
                              <p class="font-400 mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                          <div class="feature-box text-left mb-50 feature-box-square center-feature">
                              <i class="icon-linegraph font-40px default-color"></i>
                              <h4 class="mt-0 font-600">Development</h4>
                              <p class="font-400 mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                          <div class="feature-box text-left mb-50 feature-box-square center-feature">
                              <i class="icon-anchor font-40px default-color"></i>
                              <h4 class="mt-0 font-600">Fast Support</h4>
                              <p class="font-400 mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                          <div class="feature-box text-left mb-50 feature-box-square center-feature">
                              <i class="icon-phone font-40px default-color"></i>
                              <h4 class="mt-0 font-600">Apps</h4>
                              <p class="font-400 mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                          <div class="feature-box text-left mb-50 feature-box-square center-feature">
                              <i class="icon-laptop font-40px default-color"></i>
                              <h4 class="mt-0 font-600">Branding</h4>
                              <p class="font-400 mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                      </div>
                      <div class="col-md-4 col-sm-6">
                          <div class="feature-box text-left mb-50 feature-box-square center-feature">
                              <i class="icon-adjustments font-40px default-color"></i>
                              <h4 class="mt-0 font-600">Marketing</h4>
                              <p class="font-400 mt-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* <!--== Our Team Start ==--> */}
          <section class="white-bg">
              <div class="container">
                  <div class="row">
                      {cs.map((person) => (
                      <div class="col-md-4 col-sm-4 col-xs-12 team-member-container remove-padding">
                          <div class="team-member">
                              <div class="team-thumb">
                                      <img src={{ uri: person.image }} alt="" width={400}/>
                                      <ul class="member-icons">
                                          <li class="social-icon"><a href={person.emailURL} class="icofont icofont-social-email" tabindex="0"></a></li>
                                          <li class="social-icon"><a href={person.linkedInURL} class="icofont icofont-social-linkedin" tabindex="0"></a></li>
                                      </ul>
                              </div>
                              <div class="member-info mt-10 mb-10 text-center">
                                      <h3>{person.name}</h3>
                                      <h5> {person.designation}</h5>
                              </div>
                          </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
    </div>
  )
}

export default CS