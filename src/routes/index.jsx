import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutUs from '../pages/aboutUs/AboutUs'
import Events from '../pages/Events/Events'
import Home from '../pages/home/Home'
import OurTeam from '../pages/Team/ourTeam'
import CS from '../pages/Chapters/CS/cs'
import CAS from '../pages/Chapters/CAS/cas'
import RAS from '../pages/Chapters/RAS/ras'
import WIE from '../pages/Chapters/WIE/wie'
import SPS from '../pages/Chapters/SPS/sps'


const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/cs" element={<CS />} />
        <Route path="/cas" element={<CAS />} />
        <Route path="/wie" element={<WIE />} />
        <Route path="/ras" element={<RAS />} />
        <Route path="/sps" element={<SPS />} />
      </Routes>
    </div>
  )
}

export default index

