import React from 'react'

const eventsCard = ({EventImage, EventTitle, EventDate}) => {
  return (
      <div>
          <div class="col-md-4 col-sm-6 col-xs-12">
              <div class="post animation-move-top mb-30">
                  <div class="post-img"> <img class="img-responsive" src="assets/images/post/post-01.jpg" alt="" /> </div>
                  <div class="post-info all-padding-40">
                      <h5>January 15, 2018</h5>
                      <h3><a href="blog-grid.html">How These Different Book Covers Reflect the Design</a></h3>
                      <h6><a class="viewmore" href="#.">view more</a></h6>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default eventsCard