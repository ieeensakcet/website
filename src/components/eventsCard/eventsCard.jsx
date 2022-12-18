import React from 'react'
import "./eventsCard.css"

const EventsCard = ({Data}) => {
  return (
      <div>
          <div className="col-md-12 col-sm-2 col-xs-12 blog-style-01 xl-display">
              <div className="post animation-move-top mb-20">
                  <div className="post-img"> <img className="img-responsive" src={Data.imgUrl} alt="" /> </div>
                  <div className="post-info" style={{
                      height: "200px",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                  }} >
                      <h5 style={{
                          color: "#c31434"
                      }}>{new Date(Data.date).toLocaleDateString()}</h5>
                      <h3><p style={{
                          color: "#000",
                            fontSize: "20px"
                      }}>{Data.title}</p></h3>
                      <div className="speakerDetails">
                          <h2 >
                              {Data.speakerName}
                          </h2>
                          <h5 style={{
                              color: "#14649b"
                          }}>{Data.speakerDetails}</h5>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-12 col-sm-2 col-xs-12 sm-display-none blog-style-01">
              <div className="post animation-move-top mb-20">
                  <div className="post-img"> <img className="img-responsive" src={Data.imgUrl} alt="" /> </div>
                  <div className="post-info" style={{
                      height: "200px",
                      paddingTop: "20px",
                      paddingLeft: "20px",
                  }}>
                      <h5 style={{
                          color:"#c31434"
                      }}>{new Date(Data.date).toLocaleDateString()}</h5>
                      <h3><p style={{
                          color: "#000",
                            fontSize: "20px"
                      }} >{Data.title}</p></h3>
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