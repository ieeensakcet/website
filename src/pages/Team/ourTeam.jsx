import React,{useState, useEffect} from 'react'
import { db } from '../../utils/firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'
import Team from '../../components/chaptersComponents/team'
import Loader from '../../components/loader/Loader'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const OurTeam = () => {

  const [userData, setData] = useState([[]]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const docRef = await getDocs(collection(db, "positionsInfo"));
      setData(docRef.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getData();
  }, [])

  return (
    <div>
      {
        userData.length > 1 ? (
        <section className="white-bg">
          <div className="container">
              <div className="container">
                <div>
                <div>
                  <div className="col-md-12 col-sm-8 section-heading">
                    <h5 className="play-font font-italic italic-h5" style={{
                      color: "#000000",
                      fontSize: "30px",
                    }}>IEEE Student Branch</h5>
                  </div>
                </div>
              </div>
                <div className="cbp-l-filters-alignCenter text-sm-center mb-100">
                  <div className="cbp-filter-item">
                    <a href="#execom" className='cbp-filter-item' style={{
                      color: "#14649b",
                  }}>
                    Execom
                  </a>
                  </div>
                  <div className="cbp-filter-item">
                    <a href="#leadership" className='cbp-filter-item' style={{
                      color: "#14649b",
                    }}>
                    Leadership Team
                  </a>
                  </div>
                  <div className="cbp-filter-item">
                    <a href="#publicity" className='cbp-filter-item' style={{
                      color: "#14649b",
                    }}>
                    Publicity Team
                  </a>
                  </div>
                  <div className="cbp-filter-item" >
                    <a href="#tech" className='cbp-filter-item' style={{
                      color: "#14649b",
                    }}>
                    Tech Team
                    </a>
                  </div>
                </div>
              </div>
              <div style={{
                marginTop: "-100px",
              }}>
              <section className="white-bg" id="execom">
              <div className="container">
                <div >
                  <div>
                        <div>
                          <div className="col-md-12 col-sm-8 section-heading">
                            <h5 className="font-italic italic-h5" style={{
                              color: "#000000",
                              fontSize: "20px",
                            }}>Execom Team</h5>
                          </div>
                        </div>
                  </div>
                </div>
                <div className="row mt-50">
                  { 
                    userData[2].positions.map((item, index) => {
                      return (
                        <Team item={item} key={index} />
                      )
                    })
                  }
                </div>
              </div>
            </section>
                <section className="white-bg" id="leadership" style={{
                  marginTop: "-100px",
                }}>
              <div className="container">
                <div >
                      <div>
                        <div className="col-md-12 col-sm-8 section-heading">
                          <h5 className="font-italic italic-h5" style={{
                            color: "#000000",
                            fontSize: "20px",
                          }}>Leadership Team</h5>
                        </div>
                      </div>
                </div>
                <div className="row mt-50">
                  {
                        userData[3].positions.sort((a, b) => {
                          return a.order - b.order
                    }).map((item, index) => {
                      return (
                        <Team item={item} key={index} />
                      )
                    })
                  }
                </div>
              </div>
            </section>
                <section className="white-bg" id='publicity' style={{
                  marginTop: "-100px",
                }}>
              <div className="container">
                <div >
                      <div>
                        <div className="col-md-12 col-sm-8 section-heading">
                          <h5 className="font-italic italic-h5" style={{
                            color: "#000000",
                            fontSize: "20px",
                          }}>Publicity Team</h5>
                        </div>
                      </div>
                </div>
                <div className="row mt-50">
                  {
                    userData[4].positions.map((item, index) => {
                      return (
                        <Team item={item} key={index} />
                      )
                    })
                  }
                </div>
              </div>
            </section>
                <section className="white-bg" id="tech" style={{
                  marginTop: "-100px",
                  marginBottom:0
                }}>
              <div className="container">
                    <div>
                      <div className="col-md-12 col-sm-8 section-heading">
                        <h5 className="font-italic italic-h5" style={{
                          color: "#000000",
                          fontSize: "20px",
                        }}>Tech Team</h5>
                      </div>
                    </div>
                <div className="row mt-50">
                  {
                    userData[7].positions.map((item, index) => {
                      return (
                        <Team item={item} key={index} />
                      )
                    })
                  }
                </div>
              </div>
                </section>
                </div>
              
          </div>
          </section>
        ) : <Loader />
      }
      <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"><ArrowUpwardIcon /></i></p>
     </div> 
  )
}

export default OurTeam

