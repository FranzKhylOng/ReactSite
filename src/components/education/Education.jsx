import React from 'react'
import './education.css'
import {GrInProgress} from 'react-icons/gr'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Fade, Slide } from "react-awesome-reveal";

const Education = () => {
  return (
    <section id='education'>
        <h5>Get To Know</h5>
        <h2>My Education</h2>
        <div className="educ-items">
        <Slide direction='right' duration={800} delay={300}>
            <div className="educ-item">
                <h5 className='date'>2022-2023</h5>
                <h3 className='info'>Data Committee Co-Lead</h3>
                <h5>Google Developer's Student Clubs - PLM</h5>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay>
            <div className="educ-item">
                <h5 className='date'>2019-2023</h5>
                <h3 className='info'>Bachelor's degree, Computer Engineering</h3>
                <h5>Pamantasan ng Lungsod ng Maynila</h5    >
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={150}>
            <div className="educ-item">
                <h5 className='date'>2017-2019</h5>
                <h3 className='info'>STEM - Technology</h3>
                <h5>Adamson University</h5>
            </div>
            </Slide>
        </div>
    </section>
  )
}

export default Education