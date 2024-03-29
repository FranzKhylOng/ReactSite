import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { Fade, Slide } from "react-awesome-reveal";

const Experience = () => {
  return (
    
    <section id='experience'>
     
        <h5>Get To Know</h5>
        <h2>My Skills</h2>
        
        <div className="container experience__container">
        <Slide direction='left' duration={800}>
          <div className="experience_hard">
            <h3>Hard Skills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Python</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>HTML</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>CSS</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>BootStrap</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>JavaScript</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>React</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Power BI</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Power Automate</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Power Apps</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>SQL</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>C++</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>C#</h4>
              </article>

            </div>
          </div>
          </Slide>

          <Slide direction='right' duration={800}>
          <div className="experience_soft">
            <h3>Soft Skills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Growth Mindset</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Public Speaking</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Self-Motivated</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Communication</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Flexibility</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Teamwork</h4>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Dedication</h4>
              </article>
            </div>
          </div>
          </Slide>
        </div>
  
    </section>

  )
}

export default Experience