import React from 'react'

const landingScreen = ({ chaptersGroupPhoto, chapterName, chapterLogo, Description, themeColor }) => {
  return (
      <div>
          <section className="fixed-bg remove-padding" style={{
              backgroundImage: `url(${chaptersGroupPhoto})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
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
          <section className="pt-0 pb-0 transition-none white-bg" id="about">
              <div className="container-fluid">
                  <div className="row row-flex flex-center">
                      <div className="col-md-6 col-sm-6 col-xs-12 relative remove-padding">
                          <div className="img-center" style={{
                              backgroundImage: `url(${chapterLogo})`
                          }}></div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12" style={{
                          backgroundColor: themeColor
                      }} >
                          <div className="center-layout text-left">
                              <div className="v-align-middle">
                                  <div className="pt-130 pb-130 pr-50 pl-50">
                                      <h2 className="mt-0 font-700">Who We Are</h2>
                                      {Description}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}

export default landingScreen