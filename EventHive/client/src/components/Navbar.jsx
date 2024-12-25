import React from 'react'
import './navbar.css'
import Logo from '../assests/logo.png'
const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <div className='logo'>
            <img src={Logo} alt="Logo" />
            </div>
            <div className='pages'>
                <span>Events</span>
                <span>Contact us</span>
                <span>About us</span>

            </div>
            
        </div>
    </div>
  )
}

export default Navbar