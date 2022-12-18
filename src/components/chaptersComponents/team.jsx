import React from 'react'

const Team = ({ item }) => {
    return (
        <figure className="imghvr-blur text-center col-md-4 col-sm-4 col-xs-12 remove-padding">
            <img src={item.imgUrl !== "" ? item.imgUrl : `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`} alt="" style={{
                width: "100%",
                height: "370px"
            }} />
            <figcaption className="white-bg">
                <div className="center-layout">
                    <div className="v-align-middle">
                        <h4 className="mb-0 mt-10 dark-color">{item.name}</h4>
                        <h5 className="gradient-color mt-0 mb-0 montserrat-font">{item.designation}</h5>
                        <ul className="social-default-no-border mt-20 mb-20">
                            <li><a href={`https://www.linkedin.com/in/${item.linkedin}`} className="facebook"><i className="icofont icofont-social-linkedin"></i></a></li>
                            <li><a href={`mailto:${item.email}`} className="twitter"><i className="icofont icofont-email"></i></a></li>
                        </ul>
                    </div>
                </div>
            </figcaption>
        </figure>

  )
}

export default Team