import React from 'react'
import './Styles/Navbar.css'
import {Home, Information, Workflow, MessageBadge} from './Icons/icons'

function Navbar() {
  const iconStyle = { color: 'white', height: 30, width: 30 };

  return (
    <div className='wrap-container-nav'>
      <div>
        <ul className='navbar-main'>
          <li>
            <Home style={iconStyle} />
            <a className='nav-lists' href="#home">Home</a>
          </li>

          <li>
            <Information style={iconStyle} />
            <a className='nav-lists' href="#about">About</a>
          </li>

          <li>
            <Workflow style={iconStyle} />
            <a className='nav-lists' href="#work">Work</a>
          </li>

          <li>
            <MessageBadge style={iconStyle} />
            <a className='nav-lists' href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar