import React from 'react'
import "./AboutUs.css"
import collegeLogo from "../../assets/img/logos/college_logo.png"
import pattern from "../../assets/img/pattern-bg-dark.jpg"
import Accordion from '../../components/Accordions/accordions'

const AboutUs = () => {

  const accordionData = [
    {
      heading: "What is IEEE",
      content:
        "Institute of Electrical and Electronics Engineers, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.",
    },
    {
      heading: "Is IEEE only for CS and IT Engineering Students?",
      content:"No, IEEE is available to all branches of engineering."
    },
    {
      heading: "What are the payments options for IEEE membership?",
      content: "Online payment and payment through Bank."
    },
    {
      heading: "I am no longer a student, how can I change to an IEEE Professional Membership?",
      content: "  Once you finish your student membership, you can apply for professional membership the same way you did for student membership."
    },
    {
      heading: "What are the IEEE Membership Benefits?",
      content: " See benefits at top of the page<"
    },
    {
      heading: "Do I need to be an IEEE member to get a GoogleApps@IEEE mail account?",
      content: "Yes"
    },
  ];
  return (
    <div>
      <div className="about-us" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#212121"
      }}>
        <img
          className='white-bg'
          src={collegeLogo}
          style={{
            width: "100%",
            height: "100%",
          }} />
        <div style={
          {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",

          }
        } >
        <div className="mt-60">
          <h2 style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#fff",
              lineHeight: "1.2",
              marginTop: "1rem",
              textAlign: "center"
          }}>
            IEEE Student Branch of Nawab Shah Alam Khan College of Engineering
            and Technology
          </h2>
          <h5 style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.2",
              padding: "3rem",
              textAlign: "center"
          }}>
            is a student community that strives to inform, learn, entertain, and
            inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </h5>
        </div>
        </div>

      </div>
      <div className="about-us" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#212121"
      }}>
        <div style={
          {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",

          }
        } >
          <div className="">
            <h2 style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#fff",
              lineHeight: "1.2",
              marginTop: "1rem",
              textAlign: "center"
            }}>
              IEEE Student Branch of Nawab Shah Alam Khan College of Engineering
              and Technology
            </h2>
            <h5 style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.2",
              padding: "3rem",
              textAlign: "center"
            }}>
              IEEE has its community around the globe, with more than 420,000 IEEE
              members. The world map has been divided into 10 regions and we come
              under Region 10 (Asia and Pacific), we are located in India and
              belong to the IEEE India Council which acts as a consortium of 12
              IEEE Sections located in different states of the country. IEEE
              Hyderabad Section foresees the activities in Telangana and Andhra
              Pradesh, different IEEE organizational units come under the section
              which includes IEEE Student Branches of colleges and universities.
            </h5>
          </div>
        </div>
        <img
          className='white-bg'
          src='https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg' style={{
            width: "100%",
            height: "100%",
          }} />
      </div>
      <section style={{
        backgroundImage: `url(${pattern})`
      }}>
        <div class="container">
          <div class="row">
            <div class="testimonial-style-6">
              <div class="col-xs-12">
                <div class="testimonial-item text-center">
                  <div class="testimonial-content white-color">
                    <img class="img-responsive text-center" style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "100%",
                      margin: "auto"

                    }}  src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/hafsa_EFuQsDexX.jpeg" alt="avatar-1" />
                    <p class="mt-20 line-height-26 font-20px">“Our IEEE Student Branch provides networking opportunities among various entrepreneurs and students so that the members achieve problem-solving and leadership skills, this will help students to come up with new ideas and to determine what they are willing to achieve.The Student Branch teaches the students about the professional environment of the corporate world and also provides technical and fun activities to keep the students active and engaged throughout their campus life.”</p>
                    <h5 class="font-700 mb-0 white-color">Hafsa Taruj</h5>
                  </div>
                </div>
              </div>

              <div class="col-xs-12">
                <div class="testimonial-item text-center">
                  <div class="testimonial-content white-color">
                    <img class="img-responsive text-center" style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "100%",
                      margin: "auto"

                    }} src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kaunain.jpg" alt="avatar-2" />
                    <p class="mt-20 line-height-26 font-20px">“IEEE has given me the chance to improve my management skills.
                      Being exposed to multitudinous scenarios, I learned valuable
                      wisdom about effectively managing my time, developing new work
                      processes, voicing opinions while being open to feedback and
                      above all, networking with a relevant group of professionals.
                      IEEE members are uniquely positioned to provide the innovative
                      solutions needed in the technical industries going forward. In
                      addition to the human networks that can be tapped for advice or
                      assistance, there are many web resources with special access
                      just for members.”</p>
                    <h5 class="font-700 mb-0 white-color">Syeda Kounain Fatima</h5>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="testimonial-item text-center">
                  <div class="testimonial-content white-color">
                    <img class="img-responsive" style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "100%",
                      margin: "auto"

                    }} src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kounain.JPG" alt="avatar-3" />
                    <p class="mt-20 line-height-26 font-20px">“Joining IEEE has provided me with professional exposure. It
                      also exposed me to various new opportunities and gave me a
                      chance to organize technical events, seminars, webinars and to
                      network with people all over the world.”</p>
                    <h5 class="font-700 mb-0 white-color">Syeda Kaunain Fatima</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="grey-bg" style={{
        height:"100vh"
      }}>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-5">
              <div class="panel-group accordion-style-03" id="accordion-style-3">
                <div class="panel">
                  <div class="panel-heading active-accordion"> <a data-toggle="collapse" data-parent="#accordion-style-3" href="#question9" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Innovative Services <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question9" class="panel-collapse collapse in" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
                <div class="panel">
                  <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style-3" href="#question10" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Creatvie Design <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question10" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
                <div class="panel">
                  <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style-3" href="#question11" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Digital Marketing <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question11" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
                <div class="panel">
                  <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style-3" href="#question12" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Lifetime Support <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question12" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-6 xs-mb-30 col-md-offset-1">
              <div class="panel-group accordion-style-04" id="accordion-style-4">
                <div class="panel">
                  <div class="panel-heading active-accordion"> <a data-toggle="collapse" data-parent="#accordion-style-4" href="#question13" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Innovative Services <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question13" class="panel-collapse collapse in" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
                <div class="panel">
                  <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style-4" href="#question14" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Creatvie Design <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question14" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
                <div class="panel">
                  <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style-4" href="#question15" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Digital Marketing <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question15" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
                <div class="panel">
                  <div class="panel-heading"> <a data-toggle="collapse" data-parent="#accordion-style-4" href="#question16" aria-expanded="false" class="collapsed">
                    <div class="panel-title">Lifetime Support <span class="pull-right"><i class="ion-chevron-down"></i></span> </div>
                  </a> </div>
                  <div id="question16" class="panel-collapse collapse" aria-expanded="false" role="tablist">
                    <div class="panel-body"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt maiores placeat obcaecati, beatae. Facilis dolore ipsam facere perferendis deserunt 	commodi blanditiis nisi accusamus omnis, animi vel tenetur cumque, sed veritatis? </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}
      {/* <a href="javascript:" id="return-to-top"><i class="icofont icofont-arrow-up"></i></a> */}
      <div style={{
        height: "100vh",
        width: "100%",
        justifyContent: 'center',
      }}>
        <div className="about-us" style={{
          display: 'grid',
          backgroundColor: '#000000',
          gridTemplateColumns: 'repeat(2fr, 2fr)',
          gridTemplateRows: 'repeat(2fr, 2fr)',
          color: 'white',
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
          <ul className="accordion">
            {accordionData.map(({ heading, content }) => (
              <Accordion heading={heading} content={content} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutUs