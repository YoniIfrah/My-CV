
import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp } from 'react-icons/bs'
import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from "../popup/Popup";


const Contact = () => {
  const MyEmail = "yonifrah996@gmail.com";
  const whatsapp = "https://wa.me/972525639295"
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');


  // for popup
  const [visibility, setVisibility] = useState(false);
  const popupCloseHandler = () => {
    setVisibility(false);
  };
  
  const handleClick = () => {
    switch (true){
      case !name:
        console.log("Error in name variable: " + name);
        return;
      case !msg:
        console.log("Error in msg variable: " + msg);
        return;
      case !email:
        console.log("Error in email variable: " + email);
        return;
      default:
        break;
    }
    setVisibility(true)
  }


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

        </div>


        {/*onSubmit will send the email from to my email.
         onClick will check if the form is completed, if we get true then popup will appear */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required value={name} onChange={(e) => setName(e.target.value)}/>
          <input type="email" name='email' placeholder='Your Email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
          <textarea name="message" rows="7" placeholder='Your Message' required value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>
          <>
          <button onClick={handleClick} type='submit' className='btn btn-primary' >Send Message</button>
          <Popup onClose={popupCloseHandler} show={visibility} title="Popup">
            <h1>Email has sent !</h1>
          </Popup>
        </>
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