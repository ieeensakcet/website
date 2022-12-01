import React, { useEffect, useState } from 'react'
import './Home.css'
import Loader from "../../components/loader/Loader"
import Carousel from '../../components/Carousel/Carousel'
import ChaptersCustom from '../../components/chaptersCutomContainer/chaptersCustom'
import Counter from '../../components/counter/counter'
import img1 from '../../assets/img/Nsakcet.jpg'
import img2 from '../../assets/img/ieeeCarousel1.JPG'
import img3 from '../../assets/img/IEEE_SB_grp.webp'
import mission from '../../assets/img/mission.png'
import vision from '../../assets/img/vission.png'
import values from '../../assets/img/values.png'
import CS from '../../assets/img/logos/CS-logo.png'
import WIE from '../../assets/img/logos/WIE-logo.png'
import RAS from '../../assets/img/logos/RAS-logo.png'
import CAS from '../../assets/img/logos/CAS-logo.png'
import SPS from '../../assets/img/logos/SPS-logo.png'
const Home = () => {
  return (
    <div >
      {/* <Loader/> */}
      {/* <NavBar /> */}
    <div className="wrapper">
      <section className="pt-0 pb-0 sm-display-none">
        <div className="hero-half-slider slick">
            <Carousel image={img1} />
            <Carousel image={img2} />
            <Carousel image={img3} />
        </div>
        </section>
        <div class="xl-display white-bg">
          <div style={{
            width: "100%",
          }}>
            <div class="row">
              <div style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}>
                <img
                  className='xl-display'
                  src={img2}
                  style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                  }}
                />
                <div style={{
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "20px",
                  paddingTop: 0
                }}>
                  <div>
                    <h5 className="gradient-color mt-30">IEEE STUDENT BRANCH.<br />of Nawab Shah Alam Khan College of Engineering and Technology</h5>
                    <h5 className="grey-color mt-20">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create</h5>
                    <p className="mt-20"><a className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>  

        {/* about our community  */}

        <section className="about-us">
          <div className="container">
            <div className="row sm-display-none" style={{
              marginBottom:"50px"
            }}>
              <div className="col-sm-8 section-heading hii">
                <h5 className="default-color mt-0 text-uppercase">Who We Are </h5>
                <h2 className="mt-0 font-700"><span className="gradient-color">"</span> IEEE Student Branch of NSAKCET <span className="gradient-color">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create.</span><span className="gradient-color">"</span> </h2>
              </div>
            </div>
            <div className="row row2 ">
              <div className="col-md-4 feature-box text-center mb-50 col-sm-6 animation-move-top">
                  <img src={mission} alt="idea" width={60} />
                <h4 className="mt-0 font-600">Mission</h4>
                <p className="font-400">To promote students empowerment, develop professional skills, organise diverse events and work towards IEEE's mission.</p>
              </div>
              <div className="col-md-4 feature-box text-center mb-50 col-sm-6 animation-move-top">
                <img src={vision} alt="idea" width={60} />
                <h4 className="mt-0 font-600">Vision</h4>
                <p className="font-400">We envision offering a relevant platform to learn and seek industrial experience, personal development, social welfare and help explore various engineering fields.</p>
              </div>
              <div className="col-md-4 feature-box text-center mb-50 col-sm-6 animation-move-top">
                <img src={values} alt="idea" width={60} />
                <h4 className="mt-0 font-600">Value</h4>
                <p className="font-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="white-bg" style={{
          marginTop: "-150px",
        }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 section-heading">
                <h5 className="default-color mt-0 text-uppercase">Our Chapters</h5>
                <h2 className="mt-0 font-700">Ten Countries Around <span className="gradient-color play-font font-italic">The World</span> Achieve Best Results.</h2>
              </div>
            </div>
            <div className="row mt-10">
              <ChaptersCustom Image={CS} />
              <ChaptersCustom Image={WIE} />
              <ChaptersCustom Image={RAS} />
              <ChaptersCustom Image={CAS} />
              <ChaptersCustom Image={SPS} />
            </div>
          </div>
        </section>
        <Counter />
        <section class="gradient-bg-6">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-8 col-sm-10 col-xs-12 centerize-col text-center">
                <h5 class="font-40px font-700 white-color">Let’s talk about your next project</h5>
                <h5 class="mb-30 font-30px white-color font-700">Marketing. Designer & Developer</h5>
                <a class="btn btn-xl btn-light btn-circle" style={{
                  borderRadius: "50px",
                }} >Join Us</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home