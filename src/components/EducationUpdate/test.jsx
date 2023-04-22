import React from 'react'
import './test.css'
import datacomm from '../../assets/dc.jpg'
import plm from '../../assets/plm.jpg'
import stem from '../../assets/Stem.jpg'
import { Slide } from "react-awesome-reveal";

const Test = () => {
    return (
        <section id="test">
        <h5>Get To Know</h5>
        <h2>My Education</h2>
        <div className="container test__container">
            <Slide direction='left' duration={800} delay={300}>
            <div className="imageitem">
                <img src={datacomm} alt="Data Committee"  className='testimg'/>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={300}>
            <div className="content">
                <h2 className='info'>Data Committee Co-Lead</h2>
                <h3 className='h3txt'>Google Developer's Student Clubs - PLM</h3>
                <h3 className='date'>2022-2023</h3>
                <p>The privilege of being the committee's co-lead has helped me learn a lot of valuable of experience that helps me grow as a person. My role involves a range of responsibilities and duties, such as to developing and executing events, organizing and leading regular meetings within the committee, and leading internal projects that would benefit our organization, such as creating dashboards for our audience demographics and performing natural language processing on our event feedbacks.</p>
            </div>
            </Slide>
            <Slide direction='left' duration={800} delay={300}>
            <div className="content">
                <h2 className='info'>BS Computer Engineering</h2>
                <h3 className='h3txt'>Pamantasan ng Lungsod ng Maynila</h3>
                <h3 className='date'>2019-2023</h3>
                <p>My time being a computer engineering student in PLM has given me the opportunity to explore programming more, where I was able to create websites for our projects, prepare more for presentations and defenses, be able to collaborate with fellow-students, and much more.</p>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={300}>
            <div className="imageitem">
                <img className='testimg' src={plm} alt="plm" />
            </div>
            </Slide>
            <Slide direction='left' duration={800} delay={300}>
            <div className="imageitem">
                <img src={stem} alt="Stem tech"  className='testimg'/>
            </div>
            </Slide>
            <Slide direction='right' duration={800} delay={300}>
            <div className="content">
                <h2 className='info'>STEM - Technology</h2>
                <h3 className='h3txt'>Adamson University</h3>
                <h3 className='date'>2017-2019</h3>
                <p>Being a STEM - Technology student in Adamson University has really been the starting point of my development. I am grateful for the school dividing the STEM track into technology, engineering, and science. I immediately knew I would choose technology, and with it, I was given my first introductions to coding.</p>
            </div>
            </Slide>
        </div>
        </section>

        )
    }
    
    export default Test