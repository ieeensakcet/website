import React from 'react'
import OfferCard from '../offerCard/offerCard'
import './memberShipOfferCard.css'

const memberShipOfferCard = ({data, society}) => {
    return (
        <section className="white-bg" style={{
            marginTop: "-150px",
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm section-heading">
                        <h2 className="mt-0 font-700"><span className="play-font font-italic" style={{
                            color: "#000000",
                            fontSize: "30px",
                        }}>{society} Membership Offer's</span></h2>
                    </div>
                </div>
                <div className="row service-box-style-01 mt-50">
                    {data.map((offer) => (
                        <OfferCard key={Math.random()} data={offer} customStyle={"feature-box text-left mb-50 feature-box-square-cs center-feature"} />
                    ))}
                </div>
            </div>
        </section>
  )
}

export default memberShipOfferCard