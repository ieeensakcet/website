import React,{useState, useEffect} from 'react'
import rasLogo from "../../../assets/img/logos/RAS-logo.png"
import { rasOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersComponents/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersComponents/memberShipofferCard/MemberShipofferCard';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase' 
import Team from '../../../components/chaptersComponents/team';
import MessageCom from '../../../components/chaptersComponents/advisorsMessageComponent/messageCom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

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
            const docRef = doc(db, "positionsInfo", "ras");
            const CsPositions = await (await getDoc(docRef)).data().positions;
            setData(CsPositions)
        }
        getData();
    }, [])
    const desc = (
        <div>
            <h5 className="mt-30 font-italic italic-h5">IEEE Robotics and Automation Society</h5>
            <h5 className="grey-color mt-20" style={{
                fontSize: "1.6rem",
                lineHeight: "2.3rem"
            }}>is a professional society of the IEEE that supports the development and the exchange of scientific knowledge in the fields of robotics and automation, including applied and theoretical issues.</h5>
            <p className="mt-50"><a className="btn btn-lg animation-move-top-sm btnColor" style={{
                color: "white",
            }} href="https://www.ieee-ras.org/">Read More</a> </p>
        </div>
    )
    return (
        <div className='wrapper' >

            <LandingScreen chaptersGroupPhoto={"https://ik.imagekit.io/invincible/tr:w-1200,h-600/RAS-Group.JPG?"} chapterName={"IEEE Robotics and Automation Society"} chapterLogo={rasLogo} Description={desc} themeColor="#88201f" />
            <MemberShipOfferCard data={rasOffers} society={"RAS"}  />
            <section className="white-bg"
                style={{
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
                Name={"Ms. SHANILA MAHREEN"}
                userImage={"https://ik.imagekit.io/ieeensakcet/profiles/Executive_Committee/tr:w-370,h-370/shanila_mam.jpeg"}
                Message={"Joining IEEE is due to the fact that,you can have the smartest people in the world around you,but without collaboration the technology is not going to evolve. As a member of RAS, I find the membership invaluable source of information and conduit for growth. I believe for lasting contribution to a discipline, you really need to have an organization like IEEE behind you."}
                Designation={"RAS ADVISOR"}
            />
            <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"><ArrowUpwardIcon /></i></p>
        </div>
    )
}

export default CAS