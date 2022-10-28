import React,{useEffect, useState} from 'react'
import SPSgrp from "../../../assets/img/GroupPhotos/SPS-Group.JPG"
import SpsLogo from "../../../assets/img/logos/SPS-logo.png"
import { spsOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import Team from '../../../components/chaptersCustomCom/team';
import { db } from '../../../utils/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

const SPS = () => {
    const [userData, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "positionsInfo", "sps");
            const CsPositions = await (await getDoc(docRef)).data().positions;
            setData(CsPositions)
        }
        getData();
    }, [])
    const desc = (
        <div>
            <h5 className="gradient-color mt-30">IEEE Signal Processing Society.<br /> is a dynamic organization that is the preeminent source of signal processing information and resources to a global community.</h5>
            <h5 className="grey-color mt-20">by providing a one-stop source of signal processing resources, providing a variety of high quality resources to a variety of users in formats customized to their interests, adapting to a rapidly changing technical community, and being intimately involved in the education of signal processing professionals at all levels.</h5>
            <p className="mt-50"><a href='buibuib' className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={SPSgrp} chapterName={"IEEE Signal Processing Society"} chapterLogo={SpsLogo} Description={desc} themeColor="#76bf17" />
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
                          userData.map((item, index) => {
                              return (
                                  <Team item={item} key={index} />
                              )
                          })
                          
                      }
                  </div>
              </div>
          </section>
        </div>
    )
}

export default SPS