import React,{useState, useEffect} from 'react'
import CasLogo from "../../../assets/img/logos/CAS-logo.png"
import { casOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersComponents/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersComponents/memberShipofferCard/MemberShipofferCard';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase'
import Team from '../../../components/chaptersComponents/team';
import MessageCom from '../../../components/chaptersComponents/advisorsMessageComponent/messageCom';
const CAS = () => {
    const [userData, setData] = useState([])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        const getData = async () => {
            const docRef = doc(db, "positionsInfo", "cas");
            const CasPositions = await (await getDoc(docRef)).data().positions;
            setData(CasPositions)
        }
        getData();
    }, [])

    const desc = (
        <div>
            <h5 className="mt-30 font-italic italic-h5">IEEE Circuits and Systems Society</h5>
            <h5 className="grey-color mt-20" style={{
                fontSize: "1.6rem",
                lineHeight: "2.3rem"
            }}>is the leading organization that promotes the advancement of the theory, analysis, design, tools, and implementation of circuits and systems. The field spans their theoretical foundations, applications, and architectures for signal and information processing.</h5>
            <p className="mt-50"><a className="btn btn-lg animation-move-top-sm btnColor" style={{
                color: "white",
            }} href="https://ieee-cas.org/">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={"https://ik.imagekit.io/invincible/tr:w-1200,h-600/CAS-Group.JPG"} chapterName={"IEEE Circuits and Systems Society"} chapterLogo={CasLogo} Description={desc} themeColor="#74bb5c" />
            <MemberShipOfferCard data={casOffers} society={"CAS"} />

            {/* <!--== Our Team Start ==--> */}
            <section className="white-bg" style={{
                marginTop: "-100px",
            }} >
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
                Message={"Joining IEEE is due to the fact that,you can have the smartest people in the world around you,but without collaboration the technology is not going to evolve. As a member of CAS, I find the membership invaluable source of information and conduit for growth. I believe for lasting contribution to a discipline, you really need to have an organization like IEEE behind you."}
                Designation={"CASS & SPS Advisor"}
            />
            <p onClick={scrollToTop} id="return-to-top"><i class="icofont icofont-arrow-up pointer"></i></p>
        </div>
    )
}

export default CAS
