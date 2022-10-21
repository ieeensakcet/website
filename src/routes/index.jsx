import React from "react";
import { Routes, Route} from "react-router-dom";
import AboutUs from '../pages/aboutUs/AboutUs'
import Events from '../pages/Events/Events'
import Home from '../pages/home/Home'
import ourTeam from '../pages/Team/ourTeam'

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ourTeam" element={<ourTeam />} />
      </Routes>
    </div>
  )
}

export default index

