import React from "react";
// import './navBar.css'
import SBlogo from '../../assets/img/SB-logo.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div >
      <nav className={
        `navbar navbar-default navbar-fixed bootsnav on no-full no-border`
      }>
        <div className="attr-nav hidden-xs sm-display-none">
          <ul className="social-media-dark social-top">
            <li><a href="https://twitter.com/ieeensakcet" className="icofont icofont-social-twitter" style={{
              color: "#14649b",
              fontSize: "20px",
              textDecoration: "none"
            }}> </a></li>
            <li><a href="https://www.instagram.com/ieeensakcet/" className="icofont icofont-social-instagram" style={{
              color: "#14649b",
              fontSize: "20px",
              textDecoration: "none"
            }}> </a></li>
            <li><a href="https://www.linkedin.com/company/ieeensakcet/" className="icofont icofont-social-linkedin" style={{
              color: "#14649b",
              fontSize: "20px",
              textDecoration: "none"
            }}> </a></li>
          </ul>
        </div>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i className="tr-icon ion-android-menu"></i> </button>
          <div className="logo" > <a href="/"> <img className="logo logo-display" src={SBlogo} alt="" /> <img className="logo logo-scrolled" src={SBlogo} alt="" /> </a> </div>
        </div>
        <div className="container-fluid" style={{
          width: "100%",
        }}>


          <div className="collapse navbar-collapse" id="navbar-menu" >
            <ul className="nav navbar-nav navbar-center" data-in="fadeIn" data-out="fadeOut">
              <li className="toggleDropdown">
                <Link to="/">Home</Link>
              </li>
              <li className="toggleDropdown">
                <Link to="/aboutUs">About</Link>
              </li>
              <li className="toggleDropdown">
                <Link to="/galleria">Galleria</Link>
              </li>
              <li className="dropdown"><a href="#events" className="dropdown-toggle" data-toggle="dropdown">Events</a>
                <ul className="dropdown-menu">
                  <li><Link to="/webinars">Webinars</Link></li>
                  <li><Link to="/seminars">Seminars</Link></li>
                  <li><Link to="/workshops">Workshops</Link></li>
                  <li><Link to="/competitions">Competitions</Link></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#chapters" className="dropdown-toggle" data-toggle="dropdown">Chapters</a>
                <ul className="dropdown-menu">
                  <li><Link to={"/cs"} >Computer Society</Link></li>
                  <li><Link to={"/ras"}>Robotics and Automation Society</Link></li>
                  <li><Link to="/wie">Women in Engineering</Link></li>
                  <li><Link to={"/cas"} >Circuits and Systems</Link></li>
                  <li><Link to={"sps"} >Signal Processing Society</Link></li>
                </ul>
              </li>

              <li className="toggleDropdown">
                <Link to="/team">Team</Link>
              </li>
              <li className="toggleDropdown">
                <Link to="/joinUs">Join us</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar