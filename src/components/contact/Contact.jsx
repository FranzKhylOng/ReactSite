import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsChatLeftText} from 'react-icons/bs'
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>FranzKhylM.Ong@gmail.com</h5>
            <a href="mailto:FranzKhylM.Ong@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Franz Khyl Ong</h5>
            <a href="https://m.me/Franz.Khyl" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsChatLeftText className='contact__option-icon'/>
            <h4>Text</h4>
            <h5>+639763303159</h5>
            <CopyToClipboard text="+639763303159">
              <a href="#contact">Copy To Clipboard</a>
            </CopyToClipboard>
          </article>
        </div>

          <form action=''>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>

    </section>
  )
}

export default Contact