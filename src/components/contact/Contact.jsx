
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp, BsTelephone } from 'react-icons/bs'
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from "../popup/Popup";


const Contact = () => {
  const MyEmail = "yonifrah996@gmail.com";
  const phoneNumber = "972525639295"
  const whatsapp = "https://wa.me/972525639295"

  // for popup
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility(false);
  };


  // for Email js
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_p2woc59', 'template_iwoe5kn', form.current, 'Z1tILY_zsBDqI4JyI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()

      //for popup
      setVisibility(true)

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">

          {/* CONTACT VIA EMAIL */}
          <ContactOption header4="Email" header5={MyEmail} href={"mailto:" + MyEmail}>
            <MdOutlineEmail className='contact_option-icon'/>
          </ContactOption> 

          {/* CONTACT VIA WHATSAPP */}
          <ContactOption header4="WhatsApp" header5="052 - 563 9295" href={whatsapp}>
            <BsWhatsapp className='contact_option-icon'/>
          </ContactOption>

          {/* CONTACT VIA MOBILE */}
          <ContactOption header4="Call" header5="052 - 563 9295" href={"tel:+" + phoneNumber} text='Call'>
            <BsTelephone className='contact_option-icon'/>
          </ContactOption>
        </div>


        {/*onSubmit will send the email from to my email.
         onClick will check if the form is completed, if we get true then popup will appear */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <>
          <button type='submit' className='btn btn-primary' >Send Message</button>
          <Popup onClose={popupCloseHandler} show={visibility} title="Popup">
            <h1>Email has sent !</h1>
          </Popup>
        </>
        </form>
      </div>
    </section>
  )
}

function ContactOption({children, header4, header5, href, text='Send a message'}){
  return (
  <article className='contact_option'>
  <div>{children}</div>
  <h4>{header4}</h4>
  <h5>{header5}</h5>
  <a href={href} target="_blank" rel='noreferrer'>{text}</a>
  </article>
  );
}

export default Contact