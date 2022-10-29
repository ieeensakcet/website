import React, { useState } from 'react'
import './navBar.css'
import SBlogo from '../../assets/img/SB-logo.png'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div >
      <nav className="navbar navbar-default navbar-fixed navbar-transparent dark bootsnav on no-full no-border">
        <div className="attr-nav hidden-xs sm-display-none">
          <ul className="social-media-dark social-top">
            <li><a href="#" className="icofont icofont-social-facebook"></a></li>
            <li><a href="#" className="icofont icofont-social-twitter"></a></li>
          </ul>
        </div>
        <div className="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i class="tr-icon "></i> </button>
          <div className="logo" > <a href="index.html"> <img className="logo logo-display" src={SBlogo} alt="" /> <img className="logo logo-scrolled" src={SBlogo} alt="" /> </a> </div>
        </div>
        <div className="container-fluid" style={{
          width: "100%",
        }}>
            <div className="collapse navbar-collapse" id="navbar-menu" >
              <ul className="nav navbar-nav navbar-center" data-in="fadeIn" data-out="fadeOut">
                <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/aboutUs">About</Link>
              </li>
              <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Events</a>
                <ul className="dropdown-menu">
                  <li><a href="blog-grid.html">Webinars</a></li>
                  <li><a href="blog-classNameic.html">Quizes</a></li>
                  <li><a href="blog-fullwidth.html">Competitions</a></li>
                  <li><a href="blog-masonry.html">Workshop</a></li>
                </ul>
              </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Chapters</a>
                  <ul className="dropdown-menu">
                  <li><Link to={"/cs"} >Computer Society</Link></li>
                  <li><Link to={"/ras"}>Robotics and Automation Society</Link></li>
                  <li><Link to="/wie">Women in Engineering</Link></li>
                  <li><Link to={"/cas"} >Circuits and Systems</Link></li>
                  <li><Link to={"sps"} >Signal Processing Society</Link></li>
                  </ul>
                </li>

                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
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