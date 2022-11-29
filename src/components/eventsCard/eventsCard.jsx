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
              <div class="post animation-move-top mb-30">
                  <div class="post-img"> <img class="img-responsive" src={Data.imgUrl} alt="" /> </div>
                  <div class="post-info all-padding-40" style={{
                      height:"200px"
                  }}>
                      <h5>{new Date(Data.date).toLocaleDateString()}</h5>
                      <h3><a href="">{Data.title}</a></h3>
                      <h6 style={{
                          fontSize: "1.2rem",
                            fontWeight: "400",
                            paddingTop:"10px"
                      }} >{Data.description}</h6>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default EventsCard