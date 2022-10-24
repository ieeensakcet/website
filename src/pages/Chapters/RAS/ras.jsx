import React,{useState, useEffect} from 'react'
import Nsakcet from "../../../assets/img/Nsakcet.jpg"
import rasLogo from "../../../assets/img/logos/RAS-logo.png"
import { rasOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import { doc, getDoc, collection } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase' 

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

            <LandingScreen chaptersGroupPhoto={Nsakcet} chapterName={"IEEE Robotics and Automation Society"} chapterLogo={rasLogo} Description={desc} themeColor="#88201f" />
            <MemberShipOfferCard data={rasOffers} society={"RAS"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

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