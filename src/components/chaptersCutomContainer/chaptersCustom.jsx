import React from 'react'

const chaptersCustom = ({Image}) => {
    return (
        <div class="col-md-4 col-sm-6 col-xs-12">
            <div class="white-bg text-center display-table mb-30 full-width client-logo-height animation-move-top">
                <div class="v-align-middle">
                    <a href="#"><img src={Image} alt="01" /></a>
                </div>
            </div>
        </div>
  )
}

export default chaptersCustom