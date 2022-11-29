import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <section class="dark-bg">
      <div class="col-md-6 col-sm-12 bg-flex bg-flex-left">
        <div class="bg-flex-holder bg-flex-cover"
          style={{
            backgroundImage: `url(${"https://ik.imagekit.io/ieeensakcet/tr:w-400/college_BKdkFH2fF.webp"})`
          }}
        ></div>
      </div>
      <div class="container-fluid">
        <div class="col-md-5 col-sm-7 col-md-offset-6 col-sm-offset-4">
          <div class="pl-100 xs-pl-0">
            <div class="text-left mb-40">
              <h5 class="default-color mt-0 text-uppercase">What we do</h5>
              <h2 class="mt-0 font-700 white-color">Good <span class="gradient-color">idea.</span> & tech solutions.</h2>
            </div>
            <div class="panel-group accordion-style-05" id="accordion-style">
              <div class="panel">
                <div class="panel-heading active-accordion"> <a data-toggle="collapse" data-parent="#accordion-style" href="#question1" aria-expanded="false" class="collapsed">
                  <div class="panel-title">Innovative Services <span class="pull-right"><i class="ion-android-remove"></i></span> </div>
                </a> </div>
                <div id="question1" class="panel-collapse collapse in" aria-expanded="false" role="tablist">
                  <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                </div>
              </div>
              <div class="panel">
                <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style" href="#question2" aria-expanded="false" class="collapsed">
                  <div class="panel-title">Creatvie Design <span class="pull-right"><i class="ion-android-add"></i></span> </div>
                </a> </div>
                <div id="question2" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                  <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                </div>
              </div>
              <div class="panel">
                <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style" href="#question3" aria-expanded="false" class="collapsed">
                  <div class="panel-title">Digital Marketing <span class="pull-right"><i class="ion-android-add"></i></span> </div>
                </a> </div>
                <div id="question3" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                  <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs