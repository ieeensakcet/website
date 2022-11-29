import React from 'react'
import OfferCard from '../offerCard/offerCard'
import './memberShipOfferCard.css'

const memberShipOfferCard = ({data, society, style}) => {
    return (
        <section className="white-bg" style={{
            marginTop: "-150px",
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm section-heading">
                        <h2 className="mt-0 font-700"><span className="CS-gradient-color">{society} Membership Offer's</span></h2>
                    </div>
                </div>
                <div className="row service-box-style-01 mt-50">
                    {data.map((offer) => (
                        <OfferCard key ={Math.random()} data={offer} customStyle={style} />
                    ))}
                </div>
            </div>
        </section>
  )
}

export default memberShipOfferCard