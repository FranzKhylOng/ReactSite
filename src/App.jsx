import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Chat from './components/chat/Chat'
import Education from './components/EducationUpdate/test'
import Work from './components/work/work'

const app = () => { 
  return (
    <>
        <Chat />
        <Header />
        <Nav />
        <About />
        <Work />
        <Education />
        <Experience />
        <Portfolio />
        <Contact />
    </>
  )
}

export default app