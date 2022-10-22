import React from 'react'

const offerCard = () => {
  return (
    <div>
          <div class="col-md-4 col-sm-6">
              <div class="feature-box text-left mb-50 feature-box-square center-feature">
                  <img src={cardIcon} alt="" width={iconWidth}/>
                  <h4 class="mt-0 font-600">{title}</h4>
                  <p class="font-400 mt-20">{description}</p>
              </div>
          </div>    

    </div>
  )
}

export default offerCard