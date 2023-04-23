import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import Resume from '../../assets/Resume.pdf'
import { Fade, Slide } from "react-awesome-reveal";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Slide direction='left' duration={800}>
          <div className="pic">
            <div className="me">
              <img src={ME} alt="me" />
            </div>
          </div>
          </Slide>

          
          <div className="text">
          <Slide direction='right' duration={800}>
            <h5 className='introtxt'>Hello! My name is...</h5>
            <h1>Franz Khyl Ong</h1>
            <h5 className="text-light introtxt">I am a 4th year computer engineering student who aspires to break into the world of data!</h5>
            </Slide>
            <div className='cta'>
              <Slide direction='up' delay={150} duration={800}>
              <a href={Resume} download className='btn'>Resume</a>
              </Slide>
              <Slide direction='up' delay={300} duration={800}>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
              </Slide>
            </div>
        
          </div>
          
      </div>
      <Fade delay={1000} duration={800} triggerOnce>
      <HeaderSocial />
      </Fade>
    </header>
  )
}

export default Header