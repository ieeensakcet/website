import React,{useState,useEffect} from 'react'
import './Home.css'
import Loader from "../../components/loader/Loader"
import Carousel from '../../components/Carousel/Carousel'
import ChaptersCustom from '../../components/chaptersCutomContainer/chaptersCustom'
import Counter from '../../components/counter/counter'
import mission from '../../assets/img/icons/mission.svg'
import vision from '../../assets/img/icons/vision.svg'
import values from '../../assets/img/icons/medal.svg'
import community from '../../assets/img/icons/community.svg'
import leadership from '../../assets/img/icons/Leadership.svg'
import networking from '../../assets/img/icons/networking.svg'
import CS from '../../assets/img/logos/CS-logo.png'
import WIE from '../../assets/img/logos/WIE-logo.png'
import RAS from '../../assets/img/logos/RAS-logo.png'
import CAS from '../../assets/img/logos/CAS-logo.png'
import SPS from '../../assets/img/logos/SPS-logo.png'
import OurMotive from '../../components/chaptersComponents/ourMotiveCard/ourMotive'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Home = () => {
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])


  const ourMotives = [
    {
      title: "Mission",
      description: "To promote students empowerment, develop professional skills, organise diverse events and work towards IEEE's mission.",
      img: mission,
      title2: "Community",
      description2: "Cultivate a sense of community among members and with the broader technology community.",
      img2: community,
    },
    {
      title: "Vision",
      description: "The vision of our club is to provide a platform to bring together everyone to sh3re knowledge, promote innovation, and advance technology.",
      img: vision,
      title2: "Leadership",
      description2: "Develop and empower leaders who can drive the advancement of technology.",
      img2: leadership,
    },
    {
      title: "Innovation",
      description: "We believe in innovation and creativity. We encourage our members to think out of the box and come up with new ideas.",
      img: values,
      title2: "Networking",
      description2: "Facilitate the exchange of information, build relationships, and provide resources for members",
      img2: networking,
    }
  ]
  if (loading) {
    return <Loader />
  }
  else {
    return (
      <div >
        <div className="wrapper pt-30">
          <section className="pt-0 pb-0 sm-display-none">
            <div className="hero-half-slider slick">
            
              <Carousel image={"https://ik.imagekit.io/ieeensakcet/tr:w-1000,h-500/college_MwQgGT9RO.webp"} />
              <Carousel image={"https://ik.imagekit.io/ieeensakcet/tr:w-1000,h-500/ieeeCarousel1_2fpv07wqk.JPG"} />
              <Carousel image={"https://ik.imagekit.io/ieeensakcet/tr:w-1000,h-500/IEEE_SB_grp_km0hszYpp.webp"} />
            </div>
          </section>
          <div className="xl-display white-bg">
            <div style={{
              width: "100%",
            }}>
              <div className="row">
                <div style={{
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}>
                  <img
                    className='xl-display mb-20 mt-20'
                    src={"https://ik.imagekit.io/invincible/tr:w-1000,h-500/ieee_group_photo_ut6ryLhep"}
                    style={{
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                    }}
                    alt="SB"
                  />
                  <div style={{
                  }}>
                    <div className="col-sm-8 section-heading hii">
                      <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font pt-20 pb-20 mb-0">Who We Are </h5>
                      <h2 className="mt-0 font-700"><span className="gradient-color">"</span> IEEE Student Branch of NSAKCET <span className="gradient-color1">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create.</span><span className="gradient-color">"</span> </h2>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* about our community  */}

          <section className="about-us">
            <div className="container">
              <div className="row sm-display-none" style={{
                marginBottom: "50px"
              }}>
                <div className="col-sm-8 section-heading hii">
                  <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font pb-20">Who We Are </h5>
                  <h2 className="mt-0 font-700"><span className="gradient-color">"</span> IEEE Student Branch of NSAKCET <span className="gradient-color1">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create.</span><span className="gradient-color">"</span> </h2>
                </div>
              </div>
              <div className="row service-box-style-04 margin-Top">
                {
                  ourMotives.map((motive, index) => (
                    <OurMotive Data={motive} key={index} />
                  ))
                }
              </div>
            </div>
          </section>
          <section className="white-bg"
            style={{
              marginTop: "-160px",
            }}>
            <div className="tr-collection-type-1">
             
              <div className="container" id="events">
                <div className="row">
                  <div className="col-md-8 section-heading">
                    <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font">EVENTS</h5>
                  </div>
                  <div className="col-md-12 col-sm-6 col-xs-12 banner-left">
                    <div className="row">
                      <div className="col-xs-12 col-md-6 col-sm-6 shop-banner">
                        <div className="tr-collection">
                          <a href="/seminars">
                            <img src={"https://ik.imagekit.io/invincible/tr:w-500,h-300/Seminar_1.jpg"} alt="torner-shop-banner" />
                            <span className="tr-collection-btn">Seminars</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6 col-sm-6 shop-banner">
                        <div className="tr-collection">
                          <a href="/webinars">
                            <img src={"https://ik.imagekit.io/invincible/tr:w-500,h-300/Webinar3.jpg"} alt="torner-shop-banner" />
                            <span className="tr-collection-btn">Webinars</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6 col-sm-6 shop-banner">
                        <div className="tr-collection">
                          <a href="/workshops">
                            <img src={"https://ik.imagekit.io/invincible/tr:w-500,h-300/Workshop2.jpg"} alt="torner-shop-banner" />
                            <span className="tr-collection-btn">Workshops</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6 col-sm-6 shop-banner">
                        <div className="tr-collection">
                          <a href="/competitions">
                            <img src={"https://ik.imagekit.io/invincible/tr:w-500,h-300/Workshop1.jpg"} alt="torner-shop-banner" />
                            <span className="tr-collection-btn">Competitions</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
          <section className="white-bg" style={{
            marginTop: "-150px",
          }}>
            <div className="container" id='chapters'>
              <div className="row">
                <div className="col-md-8 section-heading">
                  <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font">Our Chapters</h5>
                </div>
              </div>
              <div className="row mt-10">
                <ChaptersCustom Image={CS} link={"/cs"} />
                <ChaptersCustom Image={WIE} link={"/wie"} />
                <ChaptersCustom Image={RAS} link={"/ras"} />
                <ChaptersCustom Image={CAS} link={"/cas"} />
                <ChaptersCustom Image={SPS} link={"/sps"} />
              </div>
            </div>
          </section>
          <Counter />
          <section className="gradient-bg-6">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-md-8 col-sm-10 col-xs-12 centerize-col text-center">
                  {/* <h5 className="font-40px font-700 white-color">Let’s talk about your next project</h5> */}
                  <h5 className="mb-30 font-30px white-color font-700">Become an <span className="play-font font-italic italic-p"> IEEE Member </span>to join the first student community of Nawab Shah Alam Khan college of Engineering and Technology.</h5>
                  <a className="btn btn-xl btn-light btn-circle" href='/joinUs' style={{
                    borderRadius: "50px",
                  }} >Join Us</a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <p onClick={scrollToTop} id="return-to-top"><i className="icofont icofont-arrow-up pointer"><ArrowUpwardIcon /></i></p>
      </div>
    )
  }
}

export default Home