import React from 'react'
import './loader.css'
const Loader = () => {
  return (
      <div id="loader-overlay" style={{
          width: "100vw",
            height: "100vh",
      }}>
          <div className="loader">
              <div className="loader-inner"></div>
          </div>
      </div>
  )
}

export default Loader