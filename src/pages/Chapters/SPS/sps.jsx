import React from 'react'
import Nsakcet from "../../../assets/img/Nsakcet.jpg"
import SpsLogo from "../../../assets/img/logos/SPS-logo.png"
import { sps } from "../../../assets/data/profile";
import { spsOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
// import { doc, getDoc, collection } from 'firebase/firestore'
// import { db } from '../../../utils/firebase/firebase'

const CAS = () => {
    const desc = (
        <div>
            <h5 className="gradient-color mt-30">IEEE Circuits and Systems Society.<br /> is a dynamic organization that is the preeminent source of signal processing information and resources to a global community.</h5>
            <h5 className="grey-color mt-20">by providing a one-stop source of signal processing resources, providing a variety of high quality resources to a variety of users in formats customized to their interests, adapting to a rapidly changing technical community, and being intimately involved in the education of signal processing professionals at all levels.</h5>
            <p className="mt-50"><a className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={Nsakcet} chapterName={"IEEE Signal Processing Society"} chapterLogo={SpsLogo} Description={desc} themeColor="#76bf17" />
            <MemberShipOfferCard data={spsOffers} society={"SPS"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

            {/* <!--== Our Team Start ==--> */}
             <section className="white-bg">
              <div className="container">
                  <div>
                      <div>
                          <div className="col-md-12 col-sm-8 section-heading">
                              <h5 className="gradient-color-2 mt-0 text-uppercase">Our Creative Team</h5>
                              <h2 className="mt-0 font-700">The Strength of the Team is Each<br/> Individual Member. </h2>
                          </div>
                      </div>
                  </div>
                  <div className="row mt-50">
                      {
                          sps.map((item, index) => {
                              return (
                                  <div className="col-md-4 col-sm-4 col-xs-12 team-member-container" key={Math.random()}>
                                      <div className="team-member">
                                          <div className="team-thumb">
                                                <img src={item.imgUrl} alt="" />
                                                  <ul className="member-icons">
                                                      <li className="social-icon"><a href="#" className="icofont icofont-social-facebook" tabindex="0"></a></li>
                                                      <li className="social-icon"><a href="#" className="icofont icofont-social-twitter" tabindex="0"></a></li>
                                                      <li className="social-icon"><a href="#" className="icofont icofont-social-behance" tabindex="0"></a></li>
                                                  </ul>
                                          </div>
                                          <div className="member-info mt-10 mb-10">
                                              <h3>{item.name}</h3>
                                              <h5>{item.designation}</h5>
                                          </div>
                                      </div>
                                  </div>
                              )
                          })
                          
                      }
                  </div>
              </div>
          </section>
        </div>
    )
}

export default CAS