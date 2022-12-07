import React, { useState, useEffect } from 'react'
import CsLogo from "../../../assets/img/logos/CS-logo.png"
import { csOffers } from "../../../utils/membershipOffers";
import LandingScreen from '../../../components/chaptersCustomCom/LandingScreen/landingScreen';
import MemberShipOfferCard from '../../../components/chaptersCustomCom/memberShipofferCard/MemberShipofferCard';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase/firebase'
import Team from '../../../components/chaptersCustomCom/team';
import "./cs.css"
import MessageCom from '../../../components/chaptersCustomCom/advisorsMessageComponent/messageCom';

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
            <h5 className="mt-30 font-italic italic-h5">IEEE Computer Society</h5>
            <h5 className="grey-color mt-20" style={{
                fontSize: "1.6rem",
                lineHeight: "2.3rem"
          }}>is a professional society of IEEE its purpose and scope is “To advance the theory, practice, and application of computer and information processing science and technology” and the “professional standing of its members.”</h5>
            <p className="mt-50"><a className="btn btn-lg animation-move-top-sm btnColor" href='https://www.computer.org/' style={{
                color:"#ffffff"
            }}>Read More</a> </p>
        </div>
    )
  return (
      <div className='wrapper' >
         
          <LandingScreen chaptersGroupPhoto={"https://ik.imagekit.io/invincible/tr:w-1200,h-600/CS-Group.JPG"} chapterName={"IEEE Computer Society"} chapterLogo={CsLogo} Description={desc} themeColor="#FFA300" />
          <MemberShipOfferCard data={csOffers} society={"CS"} style={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />

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
              Name={"Ms. Syeda Farhath Begum"}
              userImage={"https://www.logolynx.com/images/logolynx/03/039b004617d1ef43cf1769aae45d6ea2.png"}
              Message={"Joining IEEE is due to the fact that,you can have the smartest people in the world around you,but without collaboration the technology is not going to evolve. As a member of CS, I find the membership invaluable source of information and conduit for growth. I believe for lasting contribution to a discipline, you really need to have an organization like IEEE behind you."}
              Designation={"CSE, Hod"}
          />
          <a href="javascript:" id="return-to-top"><i class="icofont icofont-arrow-up"></i></a>
    </div>
  )
}

export default CS