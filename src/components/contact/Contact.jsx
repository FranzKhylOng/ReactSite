import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsChatLeftText} from 'react-icons/bs'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Fade, Slide } from "react-awesome-reveal";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r26lg1f', 'template_lb93p8d', form.current, 'YeogOZdmfR9CF2dgv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      
        <div className="contact__options">
        <Slide direction='left' duration={800}>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>FranzKhylM.Ong@gmail.com</h5>
            <a href="mailto:FranzKhylM.Ong@gmail.com" target="_blank">Send a message</a>
          </article>
          </Slide>
          <Slide direction='left' duration={800} delay={150}>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Franz Khyl Ong</h5>
            <a href="https://m.me/Franz.Khyl" target="_blank">Send a message</a>
          </article>
          </Slide>
          <Slide direction='left' duration={800} delay={300}>
          <article className="contact__option">
            <BsChatLeftText className='contact__option-icon'/>
            <h4>Text</h4>
            <h5>+639763303159</h5>
            <CopyToClipboard text="+639763303159">
              <a href="#contact">Copy To Clipboard</a>
            </CopyToClipboard>
          </article>
          </Slide>
        </div>
   

        
          <form ref={form} onSubmit={sendEmail}>
          <Slide direction='right' duration={800}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            </Slide>
            <Slide direction='right' duration={800} delay={150}>
            <input type="email" name='email' placeholder='Your Email' required/>
            </Slide>
            <Slide direction='right' duration={800} delay={300}>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            </Slide>
            <Slide direction='right' duration={800} delay={450}>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            </Slide>
          </form>
  
      </div>

    </section>
  )
}

export default Contact