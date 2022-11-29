import React,{useState, useEffect} from 'react'
import RASgrp from "../../../assets/img/GroupPhotos/RAS-Group.JPG"
import rasLogo from "../../../assets/img/logos/RAS-logo.png"
import { rasOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import { doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase' 
import Team from '../../../components/chaptersCustomCom/team';

const CAS = () => {
    const [userData, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "positionsInfo", "ras");
            const CsPositions = await (await getDoc(docRef)).data().positions;
            setData(CsPositions)
        }
        getData();
    }, [])
    const desc = (
        <div>
            <h5 className="gradient-color mt-30">IEEE Robotics and Automation Society <br /> is a professional society of the IEEE that supports the development and the</h5>
            <h5 className="grey-color mt-20">exchange of scientific knowledge in the fields of robotics and automation, including applied and theoretical issues.</h5>
            <p className="mt-50"><a className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={RASgrp} chapterName={"IEEE Robotics and Automation Society"} chapterLogo={rasLogo} Description={desc} themeColor="#88201f" />
            <MemberShipOfferCard data={rasOffers} society={"RAS"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />
            <section className="white-bg"
                style={{
                    marginTop: "-100px",
                }}>
                <div className="container">
                    <div>
                        <div>
                            <div className="col-md-12 col-sm-8 section-heading">
                                <h5 className="gradient-color-2 mt-0 text-uppercase">Our Creative Team</h5>
                                <h2 className="mt-0 font-700">The Strength of the Team is Each<br /> Individual Member. </h2>
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

export default CAS