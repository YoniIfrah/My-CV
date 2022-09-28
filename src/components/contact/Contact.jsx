
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp } from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const email = "yonifrah996@gmail.com";
  const whatsapp = "https://wa.me/972525639295"
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">

          {/* CONTACT VIA EMAIL */}
          <ContactOption header4="Email" header5={email} href={"mailto:" + email}>
            <MdOutlineEmail className='contact_option-icon'/>
          </ContactOption> 

          {/* CONTACT VIA WHATSAPP */}
          <ContactOption header4="WhatsApp" header5="052 - 563 9295" href={whatsapp}>
            <BsWhatsapp className='contact_option-icon'/>
          </ContactOption>

        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

function ContactOption({children, header4, header5, href}){
  return (
  <article className='contact_option'>
  <div>{children}</div>
  <h4>{header4}</h4>
  <h5>{header5}</h5>
  <a href={href} target="_blank" rel='noreferrer'>Send a message</a>
  </article>
  );
}

export default Contact