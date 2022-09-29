import React from 'react'
import {FiGithub, FiLinkedin} from 'react-icons/fi'
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Yoni Ifrah</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/yoni-ifrah" target="_blank" rel="noreferrer"><FiLinkedin/></a>
        <a href="https://github.com/YoniIfrah" target="_blank" rel="noreferrer"><FiGithub/></a>
      </div>

    </footer>
  )
}

export default Footer