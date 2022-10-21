import React from 'react'

const Carousel = ({image}) => {
    return (
        <div className="slide">
            <div className="slide-img" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }} ></div>
            <div className="hero-text-wrap">
                <div className="hero-text white-color">
                    <div className="container">
                        <div className="white-color text-center">
                            <h1 className="white-color font-700 font-100px line-height-90"><span className="play-font font-italic">IEEE </span>STUDENT BRANCH</h1>
                            <h4 className="white-color roboto-font font-300">Nawab Shah Alam Khan College of <br />Engineering and Technology.</h4>
                            <p className="text-center mt-30"><a className="btn btn-gradient color-1 btn-xl btn-square">JOIN US</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Carousel