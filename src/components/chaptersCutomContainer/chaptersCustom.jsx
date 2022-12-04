import React from 'react'
import './chaptersCustom.css'

const chaptersCustom = ({Image,link}) => {
    return (
        <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="white-bg text-center display-table mb-30 full-width greyLayer animation-move-top">
                <div className="v-align-middle">
                    <a href={link}><img src={Image} alt="01" style={{
                        width: "90%",
                    }} /></a>
                </div>
            </div>
        </div>
  )
}

export default chaptersCustom