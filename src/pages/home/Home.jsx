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
import CS from '../../assets/img/logos/CS-logo.png'
import WIE from '../../assets/img/logos/WIE-logo.png'
import RAS from '../../assets/img/logos/RAS-logo.png'
import CAS from '../../assets/img/logos/CAS-logo.png'
import SPS from '../../assets/img/logos/SPS-logo.png'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../utils/firebase/firebase'

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

        {/* about our community  */}

        <section className="white-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 section-heading">
                <h5 className="default-color mt-0 text-uppercase">Who We Are </h5>
                <h2 className="mt-0 font-700"><span className="gradient-color">"</span> IEEE Student Branch of NSAKCET <span className="gradient-color">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create.</span><span className="gradient-color">"</span> </h2>
              </div>
            </div>
            <div className="row mt-50">
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
                <i className="icon-pictures font-40px gradient-color"></i>
                <h4 className="mt-0 font-600">Digital Solutions</h4>
                <p className="font-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="white-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 section-heading">
                <h5 className="default-color mt-0 text-uppercase">Our Chapters</h5>
                <h2 className="mt-0 font-700">Ten Countries Around <span className="gradient-color play-font font-italic">The World</span> Achieve Best Results.</h2>
              </div>
            </div>
            <div className="row mt-100">
              <ChaptersCustom Image={CS} />
              <ChaptersCustom Image={WIE} />
              <ChaptersCustom Image={RAS} />
              <ChaptersCustom Image={CAS} />
              <ChaptersCustom Image={SPS} />
            </div>
          </div>
        </section>
        <Counter/>
      </div>
    </div>
  )
}

export default Home