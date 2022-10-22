import React from 'react'
import Routes from './routes'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <div>
    <NavBar />
    <Routes/>
    <Footer/>
    </div>
  )
}

export default App