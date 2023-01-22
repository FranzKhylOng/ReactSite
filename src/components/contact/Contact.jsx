import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsChatLeftText} from 'react-icons/bs'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>FranzKhylM.Ong@gmail.com</h5>
            <a href="mailto:FranzKhylM.Ong@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine/>
            <h4>Messenger</h4>
            <h5>Franz Khyl Ong</h5>
            <a href="https://m.me/Franz.Khyl" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsChatLeftText/>
            <h4>Text</h4>
            <h5>+639763303159</h5>
            <a href="mailto:FranzKhylM.Ong@gmail.com">Send a message</a>
          </article>
        </div>
      </div>

    </section>
  )
}

export default Contact