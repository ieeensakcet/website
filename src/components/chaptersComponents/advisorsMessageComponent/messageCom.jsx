import React from 'react'
import "./messageCom.css"

const messageCom = ({Name, userImage, Designation, Message}) => {
  return (
      <div className='messageContainer'>
          <h2 className='heading'>Message From Advisor</h2>
          <div className='messageBox'>
              <div className='imgBox' >
                  <img className='advisorsImg' src={userImage} alt="advisors message" />
                  <h2 className='Name'>{Name}</h2>
                  <h5 className='designation'>{Designation}</h5>
              </div>
              <div className='message'>
                  <p>{Message}</p>   
              </div>
          </div>
    </div>
  )
}

export default messageCom