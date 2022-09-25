import React from 'react'  
import {FiGithub, FiLinkedin} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com" target="_blank"><FiGithub/></a>

    </div>
  )
}

export default HeaderSocials