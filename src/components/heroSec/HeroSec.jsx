import React from 'react'
import './HeroSec.css'

function HeroSec() {
  return (
    <div>
       <div className="heroContainer">
        <img src="https://images.unsplash.com/photo-1682695795798-1b31ea040caf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
   <div className="text">
    <h1>Find Discover, Connect, And Transact</h1>
<p>Your media marketplace destination</p>
<div className="search">
            <input type="text"  placeholder='Search for any Serviece...'/>
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
   </div>


       </div>
    </div>
  )
}

export default HeroSec