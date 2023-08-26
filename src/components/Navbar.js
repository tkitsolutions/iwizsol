import React from 'react'
import logo from '../assets/IWIZ SOL.svg';
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav>
        <div className='nav__logo'>
            <img src={logo} alt='LOGO-NOT-FOUND'/>
        </div>
        <div className='nav__menu'>
            <ul>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Services</a></li>
                <li><a>Projects</a></li>
            </ul>
            <FaBars className='nav__menu--icon'/>
            <button>
                Get A Quote
            </button>
        </div>
    </nav>
  )
}

export default Navbar