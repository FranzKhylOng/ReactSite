import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import Resume from '../../assets/Resume.pdf'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
          <h1>Franz Khyl Ong</h1>
        <h5 className="text-light">Computer Engineering Student</h5>
        <div className='cta'>
          <a href={Resume} download className='btn'>Resume</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
      </div>
      <HeaderSocial />
      <a href="#contact" className='scroll__down'>Scroll Down</a>
    </header>
  )
}

export default Header