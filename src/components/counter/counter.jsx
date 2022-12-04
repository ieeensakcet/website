import React from 'react'
import community from '../../assets/img/icons/studentMember.svg'
import events from '../../assets/img/icons/events.svg'
import group from '../../assets/img/icons/chapters.svg'
import professionals from '../../assets/img/icons/professional.svg'
const counter = () => {
    return (
        <section className="dark-bg pt-80 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={community} alt="idea" width={30} />
                            <h2 className='font-700' style={{
                                color: "#c31434"
                            }}><span className="counter font-700 white-color">100</span>+</h2>
                            <h3 className="white-color">Student Members</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={events} alt="idea" width={30} />
                            <h2 className='font-700' style={{
                                color: "#c31434"
                            }}><span className="counter font-700 white-color">50</span>+</h2>
                            <h3 className="white-color">Events</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={professionals} alt="idea" width={30} />
                            <h2 className='font-700' style={{
                                color: "#c31434"
                            }}><span className="counter font-700 white-color">5</span></h2>
                            <h3 className="white-color">Professional Members</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={group} alt="idea" width={30} />
                            <h2 className='font-700' style={{
                                color: "#c31434"
                            }}><span className="counter font-700 white-color">5</span></h2>
                            <h3 className="white-color">Chapters</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default counter