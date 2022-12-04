import React from 'react'
import "./testimonials.css"

function Testimonials({Name, Position, Views,Image}) {
    return (
        <div class="col-md-4 col-sm-6 col-xs-12 overflow">
            <div class="testimonial-item">
                <div class="testimonial-content" style={{
                    height: "70vh"
                }}>
                    <img class="img-responsive text-center" src={Image} style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                    }} alt="avatar-1" />
                    <h5 class="font-700 mb-0 white-color font-16px" style={{
                        paddingTop: "15px"
                    }}>{Name}</h5>
                    <span class="font-8px" style={{
                        color:"#f0f0f0"
                    }}>{Position}</span>
                    <p class="mt-20 views"
                    >{Views} </p>
                </div>
            </div>
        </div>
  )
}

export default Testimonials