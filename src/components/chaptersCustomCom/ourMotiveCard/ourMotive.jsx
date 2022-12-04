import React from 'react'
import "./ourMotive.css"

function ourMotive({Data}) {
    return (
        <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="flipper">
                <div class="text-center mb-50 main-box">
                    <div class="box-front height-500px" style={{
                        backgroundColor: "#14649b",
                    }}>
                        <div class="content-wrap white-color">
                            <div class="icon-wrap white-bg">
                                <i class="icofont font-40px white-color">
                                    <img src={Data.img} style={{
                                        width: "50px",
                                    }} alt="motive"/>
                                </i>
                            </div>
                            <h5 class="pt-20 primary-h5">{Data.title}</h5>
                            <hr class="center_line white-bg" />
                            <p class="mt-20 p-desc">{Data.description}</p>
                        </div>
                    </div>
                    <div class="box-back height-500px gradient-bg-6">
                        <div class="content-wrap white-color">
                            <div class="icon-wrap white-bg">
                                <i class="icofont font-40px gradient-color-4">
                                    <img src={Data.img2} style={{
                                        width: "50px",
                                    }} alt="motive"/>
                                </i>
                            </div>
                            <h4 class="pt-20 primary-h5">{Data.title2}</h4>
                            <hr class="center_line white-bg" />
                            <p class="mt-20 p-desc">{Data.description2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ourMotive