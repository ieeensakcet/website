import React from 'react'
import Routes from './routes'
import { BrowserRouter } from "react-router-dom";
import NavBar from './layout/navBar/navBar'
import Footer from './layout/footer/footer'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes/>
      <Footer/>
    </BrowserRouter>  
  )
}

export default App