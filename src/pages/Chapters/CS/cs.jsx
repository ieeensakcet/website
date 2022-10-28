import React, { useState, useEffect } from 'react'
import CSgrp from "../../../assets/img/GroupPhotos/CS-Group.JPG"
import CsLogo from "../../../assets/img/logos/CS-logo.png"
import { csOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase'
import Team from '../../../components/chaptersCustomCom/team';
const CS = () => {
    const [userData, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "positionsInfo", "cs");
            const CsPositions = await (await getDoc(docRef)).data().positions;
            setData(CsPositions)
        }
        getData();
    }, [])

    const desc = (
        <div>
         <h5 className="gradient-color mt-30">IEEE Computer Society .<br /> is a professional society of IEEE its purpose and scope is</h5>
          <h5 className="grey-color mt-20">is a professional society of IEEE its purpose and scope is “To advance the theory, practice, and application of computer and information processing science and technology” and the “professional standing of its members.”</h5>
            <p className="mt-50"><a className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
  return (
      <div className='wrapper' >
         
          <LandingScreen chaptersGroupPhoto={CSgrp} chapterName={"IEEE Computer Society"} chapterLogo={CsLogo} Description={desc} themeColor="#FFA300" />
          <MemberShipOfferCard data={csOffers} society={"CS"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

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

export default CS