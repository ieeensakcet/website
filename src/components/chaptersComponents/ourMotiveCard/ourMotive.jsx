import React from 'react'
import "./ourMotive.css"

function ourMotive({Data}) {
    return (
        <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="flipper">
                <div className="text-center mb-50 main-box">
                    <div className="box-front height-500px" style={{
                        backgroundColor: "#14649b",
                    }}>
                        <div className="content-wrap white-color">
                            <div className="icon-wrap white-bg">
                                <i className="icofont font-40px white-color">
                                    <img src={Data.img} style={{
                                        width: "50px",
                                    }} alt="motive"/>
                                </i>
                            </div>
                            <h5 className="pt-20 primary-h5">{Data.title}</h5>
                            <hr className="center_line white-bg" />
                            <p className="mt-20 p-desc">{Data.description}</p>
                        </div>
                    </div>
                    <div className="box-back height-500px gradient-bg-6">
                        <div className="content-wrap white-color">
                            <div className="icon-wrap white-bg">
                                <i className="icofont font-40px gradient-color-4">
                                    <img src={Data.img2} style={{
                                        width: "50px",
                                    }} alt="motive"/>
                                </i>
                            </div>
                            <h4 className="pt-20 primary-h5">{Data.title2}</h4>
                            <hr className="center_line white-bg" />
                            <p className="mt-20 p-desc">{Data.description2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ourMotive