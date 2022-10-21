import React from 'react'
import './Home.css'
import Loader from "../../components/loader/Loader"
import NavBar from '../../components/navBar/navBar'
import Carousel from '../../components/Carousel/Carousel'
import img1 from '../../assets/img/Nsakcet.jpg'
import img2 from '../../assets/img/ieeeCarousel1.JPG'
import img3 from '../../assets/img/IEEE_SB_grp.webp'
import mission from '../../assets/img/mission.png'
import vission from '../../assets/img/vission.png'
import Seminar from '../../assets/img/Seminar.png'
import Quizes from '../../assets/img/Quizes.png'
import Competition from '../../assets/img/Competition.png'
import Workshop from '../../assets/img/Workshop.png'
import CS from '../../assets/img/CS-logo.png'
import WIE from '../../assets/img/WIE-logo.png'
import RAS from '../../assets/img/RAS-logo.png'
import CAS from '../../assets/img/CAS-logo.png'
import SPS from '../../assets/img/SPS-logo.png'

const Home = () => {
  return (
    <div>
      <Loader/>
      {/* <NavBar /> */}
    <div className="wrapper">
      <section className="pt-0 pb-0">
        <div className="hero-half-slider slick">
            <Carousel image={img1} />
            <Carousel image={img2} />
            <Carousel image={img3} />
        </div>
        </section>
        <section className="white-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 section-heading">
                <h5 className="default-color mt-0 text-uppercase">Who We Are </h5>
                <h2 className="mt-0 font-700"><span className="gradient-color">"</span> IEEE Student Branch of Nawab Shah Alam Khan College of Engineering and Technology <span className="gradient-color">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create.</span><span className="gradient-color">"</span> </h2>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-md-4 feature-box text-center mb-50 col-sm-6 animation-move-top">
                  <img src={mission} alt="idea" width={60} />
                <h4 className="mt-0 font-600">Mission</h4>
                <p className="font-400">To promote students empowerment, develop professional skills, organise diverse events and work towards IEEE's mission.</p>
              </div>
              <div className="col-md-4 feature-box text-center mb-50 col-sm-6 animation-move-top">
                <img src={vission} alt="idea" width={60} />
                <h4 className="mt-0 font-600">Vission</h4>
                <p className="font-400">We envision offering a relevant platform to learn and seek industrial experience, personal development, social welfare and help explore various engineering fields.</p>
              </div>
              <div className="col-md-4 feature-box text-center mb-50 col-sm-6 animation-move-top">
                <i className="icon-pictures font-40px gradient-color"></i>
                <h4 className="mt-0 font-600">Digital Solutions</h4>
                <p className="font-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </section>
        <section class="white-bg">
          <div class="container">
            <div class="row">
              <div class="col-sm-8 section-heading">
                <h2 class="mt-0 font-700">Events</h2>
                <h5 class="default-color mt-0 text-uppercase">Memories Made</h5>
              </div>
            </div>
            <div class="row">
              <div class="col-md-10 centerize-col">
                <div class="row">
                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="box-icon text-center mb-20 animation-move-top"  >
                      <img src={Seminar} alt="idea" width={60} />
                      <div class="title-section">
                        <h4 class="mt-0 font-700 gradient-color">Seminars and Webinars</h4>
                        <p class="font-400">Lorem ipsum dolor sit amet consectetur adipiscing elit sed in arcu est vivamus.</p>
                      </div>
                    </div>
                    <div class="box-icon text-center animation-move-top">
                      <img src={Competition} alt="idea" width={60} />
                      <div class="title-section">
                        <h4 class="mt-0 font-700 gradient-color">Competitions</h4>
                        <p class="font-400">Lorem ipsum dolor sit amet consectetur adipiscing elit sed in arcu est vivamus.</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="box-icon text-center animation-move-top">
                      <img src={Quizes} alt="idea" width={60} />
                      <div class="title-section">
                        <h4 class="mt-0 font-700 gradient-color">Quizes</h4>
                        <p class="font-400">Lorem ipsum dolor sit amet consectetur adipiscing elit sed in arcu est vivamus.</p>
                      </div>
                    </div>
                    <div class="box-icon text-center animation-move-top">
                      <img src={Workshop} alt="idea" width={50} />
                      <div class="title-section">
                        <h4 class="mt-0 font-700 gradient-color">Workshops</h4>
                        <p class="font-400">Lorem ipsum dolor sit amet consectetur adipiscing elit sed in arcu est vivamus.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="white-bg pt-0 dark-block">
          <div class="portfolio-filter-header">
            <div class="row">
              <div class="col-sm-8 section-heading">
                <h5 class="white-color mt-0 text-uppercase">Our Chapters</h5>
                <h2 class="mt-0 font-700 white-color">The Digital Marketing Toolbox<br/> of Tomorrow.</h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row mt-minus-50">
              <div class="col-md-12">

                <div id="portfolio-gallery" class="cbp hover-type-2">
                  <div class="cbp-item col-md-4 col-sm-4 with-spacing">
                    <div class="portfolio gallery-image-hover text-center">
                      <div class="folio-overlay"></div>
                      <img src={CS} alt=""/>
                        <div class="portfolio-wrap">
                          <div class="portfolio-description">
                            <h3 class="portfolio-title">Death Proof</h3>
                            <h6 class="links">Visual Identity</h6>
                          </div>
                          <ul class="portfolio-details">
                            <li><a class="cbp-lightbox" href="assets/images/portfolio/grid/55.jpg"><i class="icofont icofont-search"></i></a></li>
                            <li><a href="custom-page-01.html"><i class="icofont icofont-link"></i></a></li>
                          </ul>
                        </div>
                    </div>
                  </div>

                  <div class="cbp-item col-md-4 col-sm-4 with-spacing">
                    <div class="portfolio gallery-image-hover text-center">
                      <div class="folio-overlay"></div>
                      <img src={WIE} alt=""/>
                        <div class="portfolio-wrap">
                          <div class="portfolio-description">
                            <h3 class="portfolio-title">Insta Perfect</h3>
                            <h6 class="links">Art Direction</h6>
                          </div>
                          <ul class="portfolio-details">
                            <li><a class="cbp-lightbox" href="assets/images/portfolio/grid/56.jpg"><i class="icofont icofont-search"></i></a></li>
                            <li><a href="custom-page-01.html"><i class="icofont icofont-link"></i></a></li>
                          </ul>
                        </div>
                    </div>
                  </div>

                  <div class="cbp-item col-md-4 col-sm-4 with-spacing">
                    <div class="portfolio gallery-image-hover text-center">
                      <div class="folio-overlay"></div>
                      <img src={RAS} alt=""/>
                        <div class="portfolio-wrap">
                          <div class="portfolio-description">
                            <h3 class="portfolio-title">Polhem Estonia</h3>
                            <h6 class="links">Print Media</h6>
                          </div>
                          <ul class="portfolio-details">
                            <li><a class="cbp-lightbox" href="assets/images/portfolio/grid/57.jpg"><i class="icofont icofont-search"></i></a></li>
                            <li><a href="custom-page-01.html"><i class="icofont icofont-link"></i></a></li>
                          </ul>
                        </div>
                    </div>
                  </div>

                  <div class="cbp-item col-md-4 col-sm-4 with-spacing">
                    <div class="portfolio gallery-image-hover text-center">
                      <div class="folio-overlay"></div>
                      <img src={CAS} alt=""/>
                        <div class="portfolio-wrap">
                          <div class="portfolio-description">
                            <h3 class="portfolio-title">Ovik Luxury</h3>
                            <h6 class="links">Branding</h6>
                          </div>
                          <ul class="portfolio-details">
                            <li><a class="cbp-lightbox" href="assets/images/portfolio/grid/58.jpg"><i class="icofont icofont-search"></i></a></li>
                            <li><a href="custom-page-01.html"><i class="icofont icofont-link"></i></a></li>
                          </ul>
                        </div>
                    </div>
                  </div>

                  <div class="cbp-item col-md-4 col-sm-4 with-spacing">
                    <div class="portfolio gallery-image-hover text-center">
                      <div class="folio-overlay"></div>
                      <img src={SPS} alt=""/>
                        <div class="portfolio-wrap">
                          <div class="portfolio-description">
                            <h3 class="portfolio-title">Fiesta</h3>
                            <h6 class="links">Web Design</h6>
                          </div>
                          <ul class="portfolio-details">
                            <li><a class="cbp-lightbox" href="assets/images/portfolio/grid/59.jpg"><i class="icofont icofont-search"></i></a></li>
                            <li><a href="custom-page-01.html"><i class="icofont icofont-link"></i></a></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="dark-bg pt-80 pb-80">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="counter-wrap">
                  <i class="icon-trophy gradient-color font-60px"></i>
                  <h2><span class="counter font-700 white-color">80</span></h2>
                  <h3 class="white-color">Student Members</h3>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="counter-wrap">
                  <i class="icon-toolbox gradient-color font-60px"></i>
                  <h2><span class="counter font-700 white-color">50</span></h2>
                  <h3 class="white-color">Events</h3>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="counter-wrap">
                  <i class="icon-lifesaver gradient-color font-60px"></i>
                  <h2><span class="counter font-700 white-color">5</span></h2>
                  <h3 class="white-color">Personal Members</h3>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="counter-wrap">
                  <i class="icon-linegraph gradient-color font-60px"></i>
                  <h2><span class="counter font-700 white-color">5</span></h2>
                  <h3 class="white-color">Chapters</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Home