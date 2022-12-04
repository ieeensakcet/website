import React,{useEffect, useState} from 'react'
import SPSgrp from "../../../assets/img/GroupPhotos/SPS-Group.JPG"
import SpsLogo from "../../../assets/img/logos/SPS-logo.png"
import { spsOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import Team from '../../../components/chaptersCustomCom/team';
import { db } from '../../../utils/firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import MessageCom from '../../../components/chaptersCustomCom/advisorsMessageComponent/messageCom';

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
            <h5 className="mt-30 font-italic italic-h5">IEEE Signal Processing Society.</h5>
            <h5 className="grey-color mt-20" style={{
                fontSize: "1.6rem",
                lineHeight: "2.3rem"
          }}> is a dynamic organization that is the preeminent source of signal processing information and resources to a global community by providing a one-stop source of signal processing resources.</h5>
            <p className="mt-50"><a className="btn btn-lg animation-move-top-sm btnColor" href="https://signalprocessingsociety.org/" style={{
                color:"#ffffff"
            }}>Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={SPSgrp} chapterName={"IEEE Signal Processing Society"} chapterLogo={SpsLogo} Description={desc} themeColor="#76bf17" />
            <MemberShipOfferCard data={spsOffers} society={"SPS"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

            {/* <!--== Our Team Start ==--> */}
            <section className="white-bg" style={{
                marginTop: "-100px",
            }}>
              <div className="container">
                  <div>
                      <div>
                          <div className="col-md-12 col-sm-8 section-heading">
                                <h5 className="play-font font-italic italic-h5" style={{
                                    color: "#000000",
                                    fontSize: "30px",
                                }}>Our Team</h5>
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
            <MessageCom
                Name={"Ms. Rahmath Unissa"}
                userImage={"https://ik.imagekit.io/ieeensakcet/profiles/Executive_Committee/tr:w-370,h-370/Rahmath_mam_20221203_BxJ7tVAzH.jpg"}
                Message={"Joining IEEE is due to the fact that,you can have the smartest people in the world around you,but without collaboration the technology is not going to evolve. As a member of SPS, I find the membership invaluable source of information and conduit for growth. I believe for lasting contribution to a discipline, you really need to have an organization like IEEE behind you."}
                Designation={"CAS & SPS Advisor"}
            />
        </div>
    )
}

export default SPS