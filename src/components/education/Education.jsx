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
            <Slide direction='right' duration={800} delay>
            <div className="educ-item">
                <h3 className='date'>2019-2023</h3>
                <h2>Bachelor's degree, Computer Engineering</h2>
                <h3>Pamantasan ng Lungsod ng Maynila</h3>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={150}>
            <div className="educ-item">
                <h3 className='date'>2017-2019</h3>
                <h2>STEM - Technology</h2>
                <h3>Adamson University</h3>
            </div>
            </Slide>
        </div>
    </section>
  )
}

export default Education