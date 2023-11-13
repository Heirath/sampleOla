import React from 'react'
import './nav.css'

function nav() {
  return (
    <div>
      <div className="mainNav">
        <div className="logo">
          <h1>Olapool</h1>
        </div>
        <div className="navs">
        <i  class="fa-solid fa-bars menuBar"></i>
          <div className="search">
            <input type="text"  placeholder='Search for any Serviece...'/>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="menus">
            <ul>
              <li>Rental store</li>
              <li>Talent</li>
              <li>English</li>
              <li>Location</li>
              <li>Sign In</li>
              
            </ul>
            <div className="button">
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default nav