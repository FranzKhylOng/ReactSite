import React from 'react'
import './about.css'
import ME from '../../assets/metwo.png'
import {FaBrain} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaBrain className='about__icon'/>
              <h5>Attitude</h5>
              <small>Loves to learn</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Academics</h5>
              <small>Dean's Lister</small>
            </article>

            <article className="about__card">
              <FaUserGraduate className='about__icon'/>
              <h5>Scholarship</h5>
              <small>DOST Merit Scholar</small>
            </article>
            </div>
            
            <p>
             Hi! I'm a computer engineering student who loves tech. I know I still have much to learn, so it keeps me even more motivated and open-minded. As cliche as it may sound, my favorite book is unapologetically 'Atomic Habits' by James Clear. 
            </p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          
        </div>

      </div>

    </section>
  )
}

export default About