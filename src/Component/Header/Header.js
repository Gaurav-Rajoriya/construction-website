import React, { useState } from 'react'
import "./Header.css"
import logo from "../Assest/logo.PNG"
import { Link } from 'react-router-dom'

const Header = () => {

  const [mobileopen,setmobileopen] = useState(false)

  const onchangehandle = ()=>{
    setmobileopen(!mobileopen)
  }

  const onhandleclose = ()=>{
    setmobileopen(false)
  }



  return (
    <div className='header'>
       <header>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <nav className={`navbar ${mobileopen ? 'come': ''} `}>
            <ul className='nav-list'>
              <li><Link to="/" onClick={onhandleclose}>Home</Link></li>
              <li><Link to="/about" onClick={onhandleclose}>About</Link></li>
              <li><Link to="/service" onClick={onhandleclose}>Service</Link></li>
              <li><Link to="/contact" onClick={onhandleclose}>Contact</Link></li>
              <li><Link to="/testimonial" onClick={onhandleclose}>Testimonial</Link></li>
            </ul>
        </nav>

        <div className='responsive'>
        <ion-icon className="menu" onClick={onchangehandle} name="menu-outline"></ion-icon>
        <ion-icon className="menuclose" onClick={onhandleclose} name="close-circle-outline"></ion-icon>
        </div>
       </header>
    </div>
  )
}

export default Header