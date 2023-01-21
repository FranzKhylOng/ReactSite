import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
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
            <img src={IMG3} alt="Old personal site" />
          </div>
          <h3>Old Site Using Vanilla</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FranzKhylOng/site" className='btn' target='_blank'>Github</a>
            <a href="https://franzkhylong.github.io/site/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Random password generator site" />
          </div>
          <h3>Random Password Generator</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/FranzKhylOng/Random-Password-Generator-Website" className='btn' target='_blank'>Github</a>
          <a href="https://franzkhylong.github.io/Random-Password-Generator-Website/" className='btn btn-primary' target='_blank'>Live Demo</a></div>          
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="Scoreboard site" />
          </div>
          <h3>Scoreboard site</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/FranzKhylOng/Scoreboard" className='btn' target='_blank'>Github</a>
            <a href="https://franzkhylong.github.io/Scoreboard/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio