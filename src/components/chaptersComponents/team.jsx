import React from 'react'

const Team = ({ item }) => {
    return (
        <figure class="imghvr-blur text-center col-md-4 col-sm-4 col-xs-12 remove-padding">
            <img src={item.imgUrl !== "" ? item.imgUrl : `https://avatars.dicebear.com/api/avataaars/${Math.random()}.svg`} alt="" style={{
                width: "100%",
                height: "370px"
            }} />
            <figcaption class="white-bg">
                <div class="center-layout">
                    <div class="v-align-middle">
                        <h4 class="mb-0 mt-10 dark-color">{item.name}</h4>
                        <h5 class="gradient-color mt-0 mb-0 montserrat-font">{item.designation}</h5>
                        <ul class="social-default-no-border mt-20 mb-20">
                            <li><a href={`https://www.linkedin.com/in/${item.linkedin}`} class="facebook"><i class="icofont icofont-social-linkedin"></i></a></li>
                            <li><a href={`mailto:${item.email}`} class="twitter"><i class="icofont icofont-email"></i></a></li>
                        </ul>
                    </div>
                </div>
            </figcaption>
        </figure>

  )
}

export default Team