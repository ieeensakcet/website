import React from 'react'
import './navBar.css'
import SBlogo from '../../assets/img/SB-logo.png'
import { Link } from "react-router-dom";
import '../../styles/css/icofonts.min.css'
const navBar = () => {
  return (
    <div >
      <nav className="navbar navbar-default navbar-fixed navbar-transparent white bootsnav on no-full no-border">
        <div className="container-fluid">
          <div className="attr-nav hidden-xs sm-display-none">
            <ul className="social-media-dark social-top">
              <li><a href="#" className="icofont icofont-social-facebook"></a></li>
              <li><a href="#" className="icofont icofont-social-twitter"></a></li>
            </ul>
          </div>

          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i class="tr-icon ion-android-menu"></i> </button>
            <div class="logo"> <a href="index.html"> <img class="logo logo-display" src={SBlogo} alt="" /> <img class="logo logo-scrolled" src={SBlogo} alt="" /> </a> </div>
          </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
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
                    <li><a href="blog-grid.html">Computer Society</a></li>
                  <li><a href="blog-classNameic.html">Robotics and Automation Society</a></li>
                  <li><a href="blog-fullwidth.html">Women in Engineering</a></li>
                  <li><a href="blog-masonry.html">Circuits and Systems</a></li>
                  <li><a href="blog-standard.html">Signal Processing Society</a></li>
                  </ul>
                </li>

                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/team">Join us</Link>
                </li>
                
              </ul>
            </div>
        </div>  
      </nav>
    </div>
  )
}

export default navBar