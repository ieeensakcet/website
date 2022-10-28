import React,{useState, useEffect} from 'react'
import CASgrp from "../../../assets/img/GroupPhotos/CAS-Group.JPG"
import CasLogo from "../../../assets/img/logos/CAS-logo.png"
import { casOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import { doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase'
import Team from '../../../components/chaptersCustomCom/team';

const CAS = () => {
    const [userData, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const docRef = doc(db, "positionsInfo", "cas");
            const CsPositions = await (await getDoc(docRef)).data().positions;
            setData(CsPositions)
        }
        getData();
    }, [])

    const desc = (
        <div>
            <h5 className="gradient-color mt-30">IEEE Circuits and Systems Society .<br /> is the leading organization that promotes the advancement of</h5>
            <h5 className="grey-color mt-20">the theory, analysis, design, tools, and implementation of circuits and systems. The field spans their theoretical foundations, applications, and architectures, as well as circuits and systems implementation of algorithms for signal and information processing.</h5>
            <p className="mt-50"><a className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={CASgrp} chapterName={"IEEE Circuits and Systems Society"} chapterLogo={CasLogo} Description={desc} themeColor="#74bb5c" />
            <MemberShipOfferCard data={casOffers} society={"CAS"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

            {/* <!--== Our Team Start ==--> */}
            <section className="white-bg">
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