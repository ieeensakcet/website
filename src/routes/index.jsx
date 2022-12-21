import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutUs from '../pages/aboutUs/AboutUs'
import Home from '../pages/home/Home'
import OurTeam from '../pages/Team/ourTeam'
import CS from '../pages/Chapters/CS/cs'
import CAS from '../pages/Chapters/CAS/cas'
import RAS from '../pages/Chapters/RAS/ras'
import WIE from '../pages/Chapters/WIE/wie'
import SPS from '../pages/Chapters/SPS/sps'
import Webinars from "../pages/Events/webinars/webinars";
import Seminars from "../pages/Events/seminars/seminars";
import Competitions from "../pages/Events/competitions/competitions";
import Workshops from "../pages/Events/workshops/workshops";
import JoinUs from "../pages/joinUs/joinUs";
import Gallery from "../pages/gallery/Gallery";

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/cas" element={<CAS />} />
        <Route path="/wie" element={<WIE />} />
        <Route path="/ras" element={<RAS />} />
        <Route path="/sps" element={<SPS />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/galleria" element={<Gallery />} />
      </Routes>
    </div>
  )
}

export default index

