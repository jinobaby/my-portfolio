import React from 'react'
import './Styles/Experience.css'
import ShinyText from './templates/ShinyText';

function Experience() {
  return (
    <div className="exp-flex-container">
      <h2 className='about-title'>Experience</h2>
      <div className="flex-container">
        <div className="exp-grid">
          <div className='exp-item'>
            <div className='exp-header'>
              <div className='role-title'>Full Stack Dev</div>
              <div className='time-duration-box'>February - July 2026</div>
            </div>
            <div className='company-title'>Techwingsys</div>
            <div className='location'>Kochi, India</div>
          </div>

          <div className='exp-item'>
            <div className='exp-header'>
              <div className='role-title'>Stock Analyst</div>
              <div className='time-duration-box'>October 2024 - January 2025</div>
            </div>
            <div className='company-title'>University of Waterloo Stocks Club</div>
            <div className='location'>Waterloo, Canada</div>
          </div>

          <div className='exp-item'>
            <div className='exp-header'>
              <div className='role-title'>Hackathon</div>
              <div className='time-duration-box'>11 - 13 July 2025</div>
            </div>
            <div className='company-title'>48 Hour - Hackon 2.0 - MCET</div>
            <div className='location'>Trivandrum, India</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience