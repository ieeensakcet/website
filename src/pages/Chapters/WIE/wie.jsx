import React, { useState, useEffect } from 'react'
import WIEgrp from "../../../assets/img/GroupPhotos/WIE-Group.JPG"
import WieLogo from "../../../assets/img/logos/WIE-logo.png"
import { wieOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import Team from '../../../components/chaptersCustomCom/team';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase'

const WIE = () => {
    const [userData, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "positionsInfo", "wie");
            const CsPositions = await (await getDoc(docRef)).data().positions;
            setData(CsPositions)
        }
        getData();
    }, [])

    const desc = (
        <div>
            <h5 className="gradient-color mt-30">IEEE Women in Engineering affinity group.<br /> is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.</h5>
            <p className="mt-50"><a href='ninoi' className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={WIEgrp} chapterName={"IEEE Circuits and Systems Society"} chapterLogo={WieLogo} Description={desc} themeColor="#712e87" />
            <MemberShipOfferCard data={wieOffers} society={"WIE"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

            {/* <!--== Our Team Start ==--> */}
            <section className="white-bg" style={{
                marginTop: "-100px",
            }}>
                <div className="container">
                    <div className="row">
                        {userData.map((item, index) => (
                            <Team item={item} key={index}  />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WIE