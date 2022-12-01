import React from 'react'
import "./AboutUs.css"
import collegeLogo from "../../assets/img/logos/college_logo.png"
import pattern from "../../assets/img/pattern-bg-dark.jpg"
import Accordion from '../../components/Accordions/accordions'
import Testimonials from '../../components/Testimonials/testimonials'

const AboutUs = () => {

  const faqs = [
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
  ];
  const faqs2 = [
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

  const testimonials = [
    {
      name: "Syeda Kaunain Fatima",
      Image: "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kaunain.jpg",
      position: "EX SB CHAIR",
      views: "IEEE has given me the chance to improve my management skills. Being exposed to multitudinous scenarios, I learned valuable wisdom about effectively managing my time, developing new work processes, voicing opinions while being open to feedback and above all, networking with a relevant group of professionals. IEEE members are uniquely positioned to provide the innovative solutions needed in the technical industries going forward. In addition to the human networks that can be tapped for advice or assistance, there are many web resources with special access just for members."
    },
    {
      name: "Hafsa Taruj",
      Image: "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/hafsa_EFuQsDexX.jpeg",
      position: "Ex DESIGN TEAM Lead",
      views: "Our IEEE Student Branch provides networking opportunities among various entrepreneurs and students so that the members achieve problem-solving and leadership skills, this will help students to come up with new ideas and to determine what they are willing to achieve. The Student Branch teaches the students about the professional environment of the corporate world and also provides technical and fun activities to keep the students active and engaged throughout their campus life."
    },
    {
      name: "Syeda Kaunain Fatima",
      Image: "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kounain.JPG",
      position: "SB Secretary",
      views: "Joining IEEE has provided me with professional exposure. It also exposed me to various new opportunities and gave me a chance to organize technical events, seminars, webinars and to network with people all over the world."
      },
  ]

  return (
    <div>
      <div className="aboutUs pt-40">
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
      <div className="ourCommunity" >
        <img
          className='white-bg xl-display-none'
          src='https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg' style={{
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
          <div className="">
            <h2 style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#fff",
              lineHeight: "1.2",
              marginTop: "1rem",
              textAlign: "center"
            }}>
              Our Community
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
          className='white-bg sm-display-none'
          src='https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg' style={{
            width: "100%",
            height: "100%",
          }} />
      </div>
      <section class="white-bg">
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#000",
          textAlign: "center",
          textDecorationLine: "underline"
        }} >Testimonials</h1>
        <div class="container">
          <div class="row">
            <div class="slick testimonial">
              {
                testimonials.map((testimonial, index) => {
                  return (
                    <Testimonials
                      Name={testimonial.name}
                      Position={testimonial.position}
                      Views={testimonial.views}
                      Image={testimonial.Image}
                      key = {Math.random()}
                    />
                  )
                }
                )}

            </div>
          </div>
        </div>
      </section>
      <section class="grey-bg">
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#000",
          textAlign: "center",
            textDecorationLine:"underline"
          }} >FAQs</h1>
        <div class="container mt-80">
          <div class="row" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

          }}>
            <div class="col-sm-6 col-md-5">
              <div class="panel-group accordion-style-03" id="accordion-style-3">
                {
                  faqs.map((faq, index) => {
                    return (
                      <Accordion Question={faq.heading} Answer={faq.content} style={"1"} key={Math.random} />
                    )
                  }
                  )
                }
              </div>
            </div>

            <div class="col-sm-6 col-md-5">
              <div class="panel-group accordion-style-04" id="accordion-style-4">
                {
                  faqs2.map((faq, index) => {
                    return (
                      <Accordion Question={faq.heading} Answer={faq.content} style ={"2"} key = {Math.random} />
                    )
                  }
                  )
                }
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs