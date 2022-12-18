import React from 'react'
import "./landingScreen.css"

const landingScreen = ({ chaptersGroupPhoto, chapterName, chapterLogo, Description, themeColor }) => {
  return (
      <div >
          <section className="fixed-bg sm-display-none" style={{
              backgroundImage: `url(${chaptersGroupPhoto})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
          }}>
              <div className="overlay-bg"></div>
              <div className="container-fluid view-height-100vh relative md-height-600px sm-height-700px xs-height-450px">
                  <div className="simple-content-slider text-center">
                      <div className="simple-content-slider-text">
                          <div className="simple-content-text-inner">
                              <div className="row">
                                  <div className="col-md-8 centerize-col col-xs-12">
                                      <div className="text-center all-padding-40">
                                          <h1 className="font-700 font-80px line-height-100 white-color xs-font-30px xs-line-height-30">{chapterName}</h1>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
         
          <section class="white-bg pb-70 sm-display-none mt-0" style={{
                paddingTop: "0px",
          }}>
              <div class="container">
                  <div class="row">
                      <div class="col-md-5">
                          <div class="design-studio-img">
                              <img src={chapterLogo} alt="img-01" class="img-responsive" />
                          </div>
                      </div>
                      <div class="col-md-7">
                          <div class="design-studio-text">
                             {Description}
                          </div>
                      </div>
                  </div>

              </div>
          </section> 
          <section class="xl-display white-bg">
              <div style={{
                  width: "100%",
                  marginTop: "-50px",
              }}>
                  <div class="row">
                          <div style={{
                              justifyContent: "center",
                              alignItems: "center",
                              alignContent:"center",
                      }}>
                          <img
                              className='xl-display'
                              src={chaptersGroupPhoto}
                              style={{
                                  backgroundSize: "contain",
                                  backgroundRepeat: "no-repeat",
                                  width: "100%",
                              }}
                                alt="img"
                          />
                              <img src={chapterLogo} alt="img-01"
                              style={{
                                  display: "block",
                                  justifyContent: "center",
                                  width: "40%",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                  marginTop: 0
                               }}
                              />
                          <div style={{
                              justifyContent: "center",
                              textAlign: "center",
                              padding: "20px",
                              paddingTop:0
                          }}>
                              {Description}
                          </div>
                      </div>
                  </div>

              </div>
          </section> 
    </div>
  )
}

export default landingScreen