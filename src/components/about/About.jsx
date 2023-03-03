import React from 'react'
import './about.css'
import ME from '../../assets/metwo.png'
import {FaBrain} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
      <Slide direction='left' duration={800}>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        </Slide>

        <div className="about__content">
          <div className="about__cards">
            <Slide direction='down' duration={800}>
            <article className="about__card">
              <FaBrain className='about__icon'/>
              <h5>Attitude</h5>
              <small>Loves to learn</small>
            </article>
            </Slide>

            <Slide direction='down' delay={150} duration={800}>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Academics</h5>
              <small>Dean's Lister</small>
            </article>
            </Slide>

            <Slide direction='down' delay={300} duration={800}>
            <article className="about__card">
              <FaUserGraduate className='about__icon'/>
              <h5>Scholarship</h5>
              <small>DOST Merit Scholar</small>
            </article>
            </Slide>
            </div>
            
            <Slide direction='right' duration={800}>
            <p>
             Hi! My name is Franz Khyl M. Ong and I love tech! I would love to establish a career in data some day so I will do my very best in achieving that dream.
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </Slide>
        </div>

      </div>

    </section>
  )
}

export default About