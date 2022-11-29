import React from 'react'
import './offerCard.css'

const OfferCard = ({ data, customStyle}) => {
  return (
    <div className="col-md-6 col-sm-6">
      <div className={customStyle} style={{
        width: "100%",
        height: "80%",
      }} >
        <i className="icon-tools-2 font-40px default-color"></i>
        <h4 className="mt-0 font-600">{data.title}</h4>
        <p className="font-400 mt-20">{data.description}</p>
      </div>
    </div>
  )
}

export default OfferCard