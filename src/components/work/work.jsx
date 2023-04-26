import React from 'react'
import './work.css'
import { Slide } from "react-awesome-reveal";
import tcs from '../../assets/tcs.png';
import questronix from '../../assets/questronix.jpg';
import ngg from '../../assets/ngg.png';

const Work = () => {
    return (
            <section id='work'>
                <h5>Get To Know</h5>
                <h2>My Work Experience</h2>
                <div className="container test__container">
            <Slide direction='left' duration={800} delay={300}>
            <div className="imageitem">
                <img src={tcs} alt="Data Committee"  className='testimgleft'/>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={300}>
            <div className="content">
                <h2 className='info'>Coding Coach/Tutor</h2>
                <h3 className='h3txt'>The Coding School</h3>
                <h3 className='date'>2023</h3>
                <p>As a part-time tutor, I have been gifted the opportunity of helping other people learn coding, and be enthusiastic about it. In order for me to teach certain subjects, I must be certified first by completing a teaching demo, capstone project, and an exam. I will be focusing on teaching Python, including Python For Kids, Python For Teens, OOP With Python, Python Algorithms, and Basic Data Analytics With Python, as they align with my career goals of being into data.</p>
            </div>
            </Slide>
            <Slide direction='left' duration={800} delay={300}>
            <div className="content">
                <h2 className='info'>Power Developer Intern</h2>
                <h3 className='h3txt'>Questronix Coporation</h3>
                <h3 className='date'>March 2023-May 2023</h3>
                <p>As an intern, I was given a solo task of developing an event dashboard application to be used by the company's marketing team. My supervisor praised me for my initiative as my application was a success with the staff when I presented my work. Creating the dashboard has helped me learn new technologies, such as Power Apps for the application, Power BI for creating dashboards and Gantt charts, and Power Automate to update the database whenever users updated the data using the app.</p>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={300}>
            <div className="imageitem">
                <img className='testimgright' src={questronix} alt="plm" />
            </div>
            </Slide>
            <Slide direction='left' duration={800} delay={300}>
            <div className="imageitem">
                <img src={ngg} alt="Stem tech"  className='testimgleft'/>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={300}>
            <div className="content">
                <h2 className='info'>Educational Content Creator</h2>
                <h3 className='h3txt'>Nexxt Gaming Guild</h3>
                <h3 className='date'>February 2022-June 2022</h3>
                <p>As an educational content creator, my responsibilities include creating scripts for educational videos, recording them, and editing them. Creating these videos and livestreaming to connect with the organization's audience has helped me develop my public speaking more. This job has also given me the opportunity to further enhance my collaboration skills with my colleagues.</p>
            </div>
            </Slide>
        </div>
            </section>
        )
    }
    
    export default Work