import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg';
import logo2 from '../assets/logoblue.svg';
import {FaBars} from 'react-icons/fa'

const Navbar = ({handleContactUs,showHome}) => {

    const[navbar,setNavbar]=useState(false);


    const changeNavbar=()=>{

        if(window.scrollY>20)
         setNavbar(true);
        else 
        setNavbar(false);
       
    }

    window.addEventListener('scroll',changeNavbar);
  return (
    <nav className={navbar?'sticky':''}>
        <div className='navbar'>
        <div className='nav__logo'>
           {navbar?<img src={logo2} alt='LOGO-NOT-FOUND'/>:
            <img src={logo} alt='LOGO-NOT-FOUND'/>}
        </div>
        <div className='nav__menu'>
            <ul>
                <li><a onClick={()=>document.getElementById('home').scrollIntoView({behavior:"smooth"})}>Home</a></li>
                <li><a onClick={()=>document.getElementById('aboutus').scrollIntoView({behavior:"smooth"})}>About Us</a></li>
                <li><a onClick={()=>document.getElementById('services').scrollIntoView({behavior:"smooth"})}>Services</a></li>
                <li><a onClick={()=>document.getElementById('projects').scrollIntoView({behavior:"smooth"})}>Projects</a></li>
            </ul>
            <FaBars className='nav__menu--icon'/>
            <button onClick={()=>document.getElementById('contactus').scrollIntoView({behavior:"smooth"})}>
                Contact Us
            </button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar