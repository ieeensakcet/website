import React from 'react'
import "./testimonials.css"

function Testimonials({Name, Position, Views,Image}) {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12 overflow">
            <div className="testimonial-item">
                <div className="testimonial-content" style={{
                    height: "80vh"
                }}>
                    <img className="img-responsive text-center" src={Image} style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                    }} alt="avatar-1" />
                    <h5 className="font-700 mb-0 white-color font-16px" style={{
                        paddingTop: "15px"
                    }}>{Name}</h5>
                    <span className="font-8px" style={{
                        color:"#f0f0f0"
                    }}>{Position}</span>
                    <p className="mt-20 views"
                    >{Views} </p>
                </div>
            </div>
        </div>
  )
}

export default Testimonials