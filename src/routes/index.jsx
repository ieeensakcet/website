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
import Webinars from "../pages/webinars/webinars";
import Seminars from "../pages/seminars/seminars";
import Competitions from "../pages/competitions/competitions";
import Workshops from "../pages/workshops/workshops";
import JoinUs from "../pages/joinUs/joinUs";

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
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/seminars" element={<Seminars />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/joinUs" element={<JoinUs />} />
      </Routes>
    </div>
  )
}

export default index

