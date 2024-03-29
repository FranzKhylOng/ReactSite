import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/demodashcover.png'
import { Slide } from "react-awesome-reveal";
import {Link} from 'react-router-dom';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Get To Know</h5>
      <h2>My Projects</h2>


      <div className="container portfolio__container">
      <Slide direction='left' duration={800}>

      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="GDSC Demographics Dashboard" />
          </div>
          <h3>GDSC Demographics Dashboard</h3>
          <div className="portfolio__item-cta">
            <button disabled className='btn' to="/udemy">In Progress</button>
          </div>
        </article>


      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} id='udemypic' alt="Udemy Courses Analysis" />
          </div>
          <h3>Udemy Courses Analysis</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FranzKhylOng/Udemy-Courses-DA/blob/main/udemy.ipynb" className='btn' target='_blank'>Github</a>
            <Link className='btn btn-primary' to="/udemy">View</Link>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="TruthSeeker.AI" />
          </div>
          <h3>TruthSeeker.AI</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FranzKhylOng/TruthSeeker.AI" className='btn' target='_blank'>Github</a>
            <a href="https://docs.google.com/presentation/d/e/2PACX-1vSAUqLn2SX62ZoI3-ozGDOZXonZNic1SBkQHcXVV2oMWII9cC6CkpKn7dSiCFPA6g/pub?start=false&loop=false&delayms=5000" className='btn btn-primary' target='_blank'>Pitch Deck</a>
          </div>
        </article>


        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Sensor website" />
          </div>
          <h3>Dashboard Monitoring System</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/calso-christian/Sensor-Project-Website" className='btn' target='_blank'>Github</a>
            <a href="https://www.canva.com/design/DAFYUay7J-I/cnkRjilgxypGcO_RuUKVdg/view?utm_content=DAFYUay7J-I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className='btn btn-primary' target='_blank'>Presentation</a>
          </div>
        </article>
 
  
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Old personal site" />
          </div>
          <h3>First Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FranzKhylOng/site" className='btn' target='_blank'>Github</a>
            <a href="https://franzkhylong.github.io/site/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        </Slide>
        <Slide direction='right' duration={800}>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Random password generator site" />
          </div>
          <h3>Random Password Generator</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/FranzKhylOng/Random-Password-Generator-Website" className='btn' target='_blank'>Github</a>
          <a href="https://franzkhylong.github.io/Random-Password-Generator-Website/" className='btn btn-primary' target='_blank'>Live Demo</a></div>          
        </article>
  
        </Slide>
      </div>
    </section>
  )
}

export default Portfolio