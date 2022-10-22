import React from 'react'

const landingScreen = ({ chaptersGroupPhoto, chapterName, chapterLogo, Description, themeColor}) => {
  return (
      <div>
          <section class="fixed-bg remove-padding" style={{
              backgroundImage: `url(${chaptersGroupPhoto})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
          }}>
              <div class="overlay-bg"></div>
              <div class="container-fluid view-height-100vh relative md-height-600px sm-height-700px xs-height-450px">
                  <div class="simple-content-slider text-center">
                      <div class="simple-content-slider-text">
                          <div class="simple-content-text-inner">
                              <div class="row">
                                  <div class="col-md-8 centerize-col col-xs-12">
                                      <div class="text-center all-padding-40">
                                          <h1 class="font-700 font-80px line-height-100 white-color xs-font-30px xs-line-height-30">{chapterName}</h1>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section class="pt-0 pb-0 transition-none white-bg" id="about">
              <div class="container-fluid">
                  <div class="row row-flex flex-center">
                      <div class="col-md-6 col-sm-6 col-xs-12 relative remove-padding">
                          <div class="img-center" style={{
                              backgroundImage: `url(${chapterLogo})`
                          }}></div>
                      </div>
                      <div class="col-md-6 col-sm-6 col-xs-12" style={{
                          backgroundColor: {themeColor}
                      }} >
                          <div class="center-layout text-left">
                              <div class="v-align-middle">
                                  <div class="pt-130 pb-130 pr-50 pl-50">
                                      <h2 class="mt-0 font-700">Who We Are</h2>
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