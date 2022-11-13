import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {BiCodeCurly} from 'react-icons/bi'
import {AiOutlineCode} from 'react-icons/ai'
import {FaUniversity} from 'react-icons/fa'

const About = () => (
  <section id='about'>
    <h5>Get to Know</h5>
    <h2>About Me</h2>
    <div className='container about_container'>
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About_Image"/>
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className='about_card'>
            <FaUniversity className='about_icon'/>
            <h5>Education</h5>
            <small>software engineer</small>
          </article>

          <article className='about_card'>
            <BiCodeCurly className='about_icon'/>
            <h5>Personal Projects</h5>
            <small>5 Completed</small>
          </article>

          <article className='about_card'>
            <AiOutlineCode className='about_icon'/>
            <h5>Academic Projects</h5>
            <small>3 Completed</small>
          </article>
        </div>

        <p>
          Hello, Im a software engineer student who seeking for a DevOps position.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
  </section>
)

export default About