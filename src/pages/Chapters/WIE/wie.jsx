import React from 'react'
import Nsakcet from "../../../assets/img/Nsakcet.jpg"
import WieLogo from "../../../assets/img/logos/WIE-logo.png"
import { wie } from "../../../assets/data/profile";
import { wieOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';

const CAS = () => {
    const desc = (
        <div>
            <h5 className="gradient-color mt-30">IEEE Women in Engineering affinity group.<br /> is a global network of IEEE members and volunteers dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.</h5>
            <p className="mt-50"><a className="btn btn-gradient color-1 btn-lg btn-square animation-move-top-sm">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={Nsakcet} chapterName={"IEEE Circuits and Systems Society"} chapterLogo={WieLogo} Description={desc} themeColor="#712e87" />
            <MemberShipOfferCard data={wieOffers} society={"WIE"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

            {/* <!--== Our Team Start ==--> */}
            <section className="white-bg">
                <div className="container">
                    <div className="row">
                        {wie.map((person) => (
                            <div className="col-md-4 col-sm-4 col-xs-12 team-member-container remove-padding">
                                <div className="team-member">
                                    <div className="team-thumb">
                                        <img src={{ uri: person.image }} alt="" width={400} />
                                        <ul className="member-icons">
                                            <li className="social-icon"><a href={person.emailURL} className="icofont icofont-social-email" tabIndex="0"></a></li>
                                            <li className="social-icon"><a href={person.linkedInURL} className="icofont icofont-social-linkedin" tabIndex="0"></a></li>
                                        </ul>
                                    </div>
                                    <div className="member-info mt-10 mb-10 text-center">
                                        <h3>{person.name}</h3>
                                        <h5> {person.designation}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CAS