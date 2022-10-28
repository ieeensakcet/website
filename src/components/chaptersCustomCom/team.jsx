import React from 'react'

const Team = ({item}) => {
    return (
        <div className="col-md-4 col-sm-4 col-xs-12 team-member-container">
            <div classNamey="team-member">
                <div className="team-thumb">
                    <img src={item.imgUrl} alt="" style={{
                        width: "100%",
                        height: "370px"
                    }} />
                    <ul className="member-icons">
                        <li className="social-icon"><a href="{item.email}" className="icofont icofont-social-email" tabindex="0"></a></li>
                        <li className="social-icon"><a href="{item.linkedin}" className="icofont icofont-social-linkedin" tabindex="0"></a></li>
                    </ul>
                </div>
                <div className="member-info mt-10 mb-10">
                    <h3>{item.name}</h3>
                    <h5>{item.designation}</h5>
                </div>
            </div>
        </div>
  )
}

export default Team