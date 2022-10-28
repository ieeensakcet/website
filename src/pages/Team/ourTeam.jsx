import React,{useState, useEffect} from 'react'
import { db } from '../../utils/firebase/firebase'
import { doc, getDocs, collection } from 'firebase/firestore'
import Team from '../../components/chaptersCustomCom/team'
import Loader from '../../components/loader/Loader'


const OurTeam = () => {

  const [userData, setData] = useState([[]])

  useEffect(() => {
    const getData = async () => {
      const docRef = await getDocs(collection(db, "positionsInfo"));
      setData(docRef.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getData();
  }, [])

  console.log(userData)

  return (
    <div>
      <Loader />
      
        <section class="white-bg">
          <div class="container">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 section-heading">
                  <h5 class="default-color mt-0 text-uppercase">Strategic Digital Solutions</h5>
                  <h2 class="mt-0 font-700">Our <span className="type-it default-color"></span></h2>
                </div>
              </div>
              </div>
                <div id="" class="cbp-l-filters-alignCenter text-sm-center mb-100">
                  <div id="#execom" class="cbp-filter-item">
                    Execom
                  </div>
                  <div id="#leadership" class="cbp-filter-item">
                    Leadership Team
                  </div>
                  <div href ="#publicity" class="cbp-filter-item">
                    Publicity Team
                  </div>
                  <div class="cbp-filter-item" >
                    <a href="#tech" className='cbp-filter-item'>
                    Tech Team
                    </a>
                  </div>
          </div>
          {
            userData.length > 1 ? (
              <div>
              <section className="white-bg" id="execom">
              <div className="container">
                <div >
                  <div>
                    <div className="col-md-12 col-sm-8 section-heading">
                      <h5 className="gradient-color-2 mt-0 text-uppercase">Execom</h5>
                      <h2 className="mt-0 font-700">The Strength of the Team is Each<br /> Individual Member. </h2>
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
              <section className="white-bg" id="leadership" >
              <div className="container">
                <div >
                  <div>
                    <div className="col-md-12 col-sm-8 section-heading">
                      <h5 className="gradient-color-2 mt-0 text-uppercase">Leadership Team</h5>
                      <h2 className="mt-0 font-700">The Strength of the Team is Each<br /> Individual Member. </h2>
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
              <section className="white-bg" id='publicity'>
              <div className="container">
                <div >
                  <div>
                    <div className="col-md-12 col-sm-8 section-heading">
                      <h5 className="gradient-color-2 mt-0 text-uppercase">Publicity Team</h5>
                      <h2 className="mt-0 font-700">The Strength of the Team is Each<br /> Individual Member. </h2>
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
            <section className="white-bg" id="tech">
              <div className="container">
                <div>
                  <div>
                    <div className="col-md-12 col-sm-8 section-heading">
                      <h5 className="gradient-color-2 mt-0 text-uppercase">Tech Team</h5>
                      <h2 className="mt-0 font-700">The Strength of the Team is Each<br /> Individual Member. </h2>
                    </div>
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
              ) : <Loader/>
            }
          </div>
          </section>
     </div> 
  )
}

export default OurTeam

