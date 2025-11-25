import React from 'react'
import Illustration from '../../assets/img/illustration-s.png';

function DefaultContent() {
  return (
          <div className="ad-dashboard-default-overlay">
    <div className="ad-dashboard-default">

            <div>

            <p className="msg">Welcome to your workspace where you can manage requirements for student clearance.</p>
            <p style={{color: 'rgba(47, 47, 47, 1)', fontWeight: 800}}>Select a content to get started!</p>
            </div >
            <img src={Illustration} className="illustration"/>
    </div>
    </div>
  )
}

export default DefaultContent;