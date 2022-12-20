import React,{useEffect, useState} from 'react'
import "./AboutUs.css"
import collegeLogo from "../../assets/img/logos/college_logo.png"
import Accordion from '../../components/Accordions/accordions'
import Testimonials from '../../components/Testimonials/testimonials'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Loader from '../../components/loader/Loader'

const AboutUs = () => {

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

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
      heading: "I am no longer a student, how can I change my Membership?",
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
      position: "Ex Design Lead",
      views: "Our IEEE Student Branch provides networking opportunities among various entrepreneurs and students so that the members achieve problem-solving and leadership skills, this will help students to come up with new ideas and to determine what they are willing to achieve. The Student Branch teaches the students about the professional environment of the corporate world and also provides technical and fun activities to keep the students active and engaged throughout their campus life."
    },
    {
      name: "Syeda Kaunain alvi",
      Image: "https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/kounain.JPG",
      position: "SB Secretary",
      views: "Joining IEEE has provided me with professional exposure. It also exposed me to various new opportunities and gave me a chance to organize technical events, seminars, webinars and to network with people all over the world."
      },
  ]
  return (
    <div className='aboutUscontainer white-bg' >
      {loading ? <Loader /> : null}
      <div className="aboutUs pt-40" id="about">
        <img
          className='white-bg'
          src={collegeLogo}
          onLoad={() => setLoading(false)}
          style={{
            width: "100%",
            height: "100%",
          }} alt="hierarchy"
           />
        <div style={
          {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",

          }
        } >
          <div className="mt-60" style={{
            width: "100%",
            height:"60vh",
            justifyContent: "center",
            alignItems: "center",
        }}>
          <h2 style={{
              fontSize: "2.5rem",
              fontWeight: "700",
              color: "#fff",
              lineHeight: "1.2",
              marginTop: "1rem",
              textAlign: "center",
              padding: "10px",
              paddingTop:"30px"
          }}>
            IEEE Student Branch of Nawab Shah Alam Khan College of Engineering
            and Technology
          </h2>
          <h5 style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.3",
              padding: "4rem",
              fontFamily: "Poppins",
              paddingBottom: "30px",
              textAlign: "left",
          }}>
            is a student community that strives to inform, learn, entertain, and
            inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. Our community
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
          }} alt="hierarchy" />
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
              fontSize: "2.5rem",
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
              lineHeight: "1.3",
              padding: "4rem",
              textAlign: "left",
              fontFamily: "Poppins"
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
        <div>

        <img
          className='white-bg sm-display-none'
          src='https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg' style={{
            width: "100%",
            height: "100%",
          }}  alt="hierarchy" />
          </div>
      </div>

        <div className="aboutUs" id="about">
          <img
            className='white-bg'
          src="https://ik.imagekit.io/invincible/50232fa1-d509-447b-a829-62a6f8da620e.jfif"
            style={{
              width: "100%",
              height: "100%",
            }} alt="hierarchy"
          />
          <div style={
            {
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",

            }
          } >
            <div className="mt-100" style={{
              width: "100%",
              height: "100vh",
              justifyContent: "center",
            alignItems: "center",
              marginTop:"300px"
            }}>
              <h2 className='mt-60' style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#fff",
                lineHeight: "1.2",
                textAlign: "center",
            }}>
              Our Achievements
              </h2>
              <h5 style={{
                fontSize: "1.5rem",
                fontWeight: "400",
                color: "#fff",
                lineHeight: "1.3",
                padding: "4rem",
                fontFamily: "Poppins",
                paddingBottom: "30px",
                textAlign: "left",
              }}>
                is a student community that strives to inform, learn, entertain, and
                inspire action through the events and experiences we create.
            </h5>
            <h5 style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#fff",
              padding: "4rem",
              fontFamily: "Poppins",
              paddingBottom: "30px",
              textAlign: "left",
              lineHeight:"3.2rem"
            }}>
              <li>Exemplary Student Branch Award'21</li>
              <li>IEEE Regional Exemplary Student Branch Award 2022</li>
              <li>IEEE India Council Outstanding Emerging Student Branch Award</li>
            </h5>
            </div>
          </div>
        </div>

      <section className='white-bg'>
        <div>
          <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font text-center pb-20" style={{
            fontSize: "2.5rem"
          }}>Teams We Have</h5>
        </div>
        <div className="container">
          <div className="col-md-12 feature-box  text-left col-sm-12 feature-box-square teamsCard">
            <div className="cardContainer">
              <h4 className="mt-0 font-600 teamsHeading">Executive Committee (ExCom)</h4>
              <p className="font-400 teamsDetails">Comprises of faculty advisors and core student members who hold officer positions and maintain the workflow.</p>
            </div>
          </div>
          <div className="col-md-12 feature-box  text-left col-sm-12 feature-box-square teamsCard">
            <div className="cardContainer">
              <h4 className="mt-0 font-600 teamsHeading">LeaderShip Team</h4>
              <p className="font-400 teamsDetails">It acts as the HR of an organization and oversees the complete function of the Student Branch.</p>
            </div>
          </div>
          <div className="col-md-12 feature-box  text-left col-sm-12 feature-box-square teamsCard">
            <div className="cardContainer">
              <h4 className="mt-0 font-600 teamsHeading">Publicity Team</h4>
              <p className="font-400 teamsDetails">This team is responsible for managing social media, promotion of events and providing support to the existing societies. It is internally divided into 2 teams:<br></br>
                1. Content Team - Responsible for generating content and deciding what goes up on our social media accounts and posters.<br></br>
                2. Design Team - Responsible for designing the posters, flyers and social media posts</p>
            </div>
          </div>
          <div className="col-md-12 feature-box  text-left col-sm-12 feature-box-square teamsCard">
            <div className="cardContainer">
              <h4 className=" font-600 teamsHeading">Tech Team</h4>
              <p className="font-400 teamsDetails">This team is responsible for managing the website and other technical aspects of the Student Branch.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg">
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#000",
          textAlign: "center",
          textDecorationLine: "underline",
          marginTop: "-60px"
        }} >Testimonials</h1>
        <div className="container">
          <div className="row">
            <div className="slick testimonial">
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
      <section className="grey-bg">
          <h1 style={{
            fontSize: "3rem",
            fontWeight: "700",
            color: "#000",
          textAlign: "center",
            textDecorationLine:"underline"
          }} >FAQs</h1>
        <div className="container mt-80">
          <div className="row" style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

          }}>
            <div className="col-sm-6 col-md-5">
              <div className="panel-group accordion-style-03" id="accordion-style-3">
                {
                  faqs.map((faq, index) => {
                    return (
                      <Accordion Question={faq.heading} Answer={faq.content} styles={"1"} key={index} />
                    )
                  }
                  )
                }
              </div>
            </div>

            <div className="col-sm-6 col-md-5">
              <div className="panel-group accordion-style-04" id="accordion-style-4">
                {
                  faqs2.map((faq, index) => {
                    return (
                      <Accordion Question={faq.heading} Answer={faq.content} styles ={"2"} key = {index} />
                    )
                  }
                  )
                }
              </div>
            </div>

          </div>
        </div>
      </section>
      <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"><ArrowUpwardIcon/></i></p>
    </div>
  )
}

export default AboutUs


// const data = [
//   {
//     date: 'April 20th, 2020',
//     title: 'Established',
//     description: 'The IEEE NSAKCET Student Club was established on April 20, 2020, and the initiative to do so was taken by Mohammed Khalid.',
//     image: ''
//   },
//   {
//     date: 'Sept 1st, 2020',
//     title: 'Student branch reaches 25 members',
//     description: 'Today, the IEEE student branch achieved the milestones of reaching a total of 25 members, with 3 of them being professional members, and conducting around 10-15 events in total.',
//     image: ''
//   },
//   {
//     date: 'Oct 4th, 2021',
//     title: 'Applauded for support of virtual congress',
//     description: 'The IEEE student branch was recognized for their contribution to the IEEE Region 10 Students Young Professionals Women in Engineering Life Members (SYWL) Virtual Congress 2020, which took place earlier this year.',
//     image: ''
//   },
//   {
//     date: 'Jan 1st, 2021',
//     title: 'Honored with cash award for SAC Buddy Program',
//     description: 'The IEEE student branch received a cash award for their participation in the SAC Buddy Program, which was recognized for its outstanding work and contributions to the field.',
//     image: ''
//   },
//   {
//     date: 'Jan 4th, 2021',
//     title: 'IEEE student branch establishes WIE and RAS',
//     description: 'The IEEE student branch has formed the IEEE Women in Engineering and Affinity Group, as well as the IEEE Robotics and Automation Society, in order to foster collaboration and support within these fields.',
//     image: ''
//   },
//   {
//     date: 'Jan 6th, 2021',
//     title: 'IEEE student branch forms Computer Society',
//     description: 'The IEEE student branch has formed the IEEE Computer Society, which aims to support and promote research and development in the field of computer science.',
//     image: ''
//   },
//   {
//     date: 'Nov 1st, 2021',
//     title: 'IEEE student branch grows to 50 members',
//     description: 'The IEEE student branch has achieved a milestone of 50 members, with a diverse range of backgrounds and expertise within the field of engineering. This is a significant accomplishment for the branch, and it demonstrates its continued growth and success.',
//     image: ''
//   },
//   {
//     date: 'Dec 4th, 2021',
//     title: 'Honored with Exemplary Student Branch Award',
//     description: 'The IEEE student branch was awarded the Exemplary Student Branch Award in 2021, which recognizes their outstanding work and contributions to the field of engineering.',
//     image: ''
//   },
//   {
//     date: 'Jan 4th, 2022',
//     title: 'Student branch expands with Signal Processing and Circuits and Systems Societies',
//     description: 'The IEEE student branch has formed the IEEE Signal Processing Society and the IEEE Circuits and Systems Society, which aim to support and promote research and development in these fields of engineering.',
//     image: ''
//   },

// ]
