import React from 'react'
import "./eventsCard.css"

const EventsCard = ({Data}) => {
  return (
      <div>
          <div class="col-md-12 col-sm-2 col-xs-12 xl-display">
              <div class="post animation-move-top mb-30">
                  <div class="post-img"> <img class="img-responsive" src={Data.imgUrl} alt="" /> </div>
                  <div class="post-info all-padding-40">
                      <h5>
                            {new Date(Data.date).toLocaleDateString()}
                      </h5>
                      <h3><a href="">{Data.title}</a></h3>
                      <h6>{Data.description}</h6>
                  </div>
              </div>
          </div>
          <div class="col-md-12 col-sm-2 col-xs-12 sm-display-none blog-style-01">
              <div class="post animation-move-top mb-20">
                  <div class="post-img"> <img class="img-responsive" src={Data.imgUrl} alt="" /> </div>
                  <div class="post-info" style={{
                      height: "200px",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                  }}>
                      <h5 style={{
                          color:"#c31434"
                      }}>{new Date(Data.date).toLocaleDateString()}</h5>
                      <h3><a href="">{Data.title}</a></h3>
                      <div className="speakerDetails">
                          <h2 >
                              {Data.speakerName}
                          </h2>
                          <h5 style={{
                              color:"#14649b"
                          }}>{Data.speakerDetails}</h5>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default EventsCard