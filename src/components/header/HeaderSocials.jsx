import React from 'react'  
import {FiGithub, FiLinkedin} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/yoni-ifrah" target="_blank"><FiLinkedin/></a>
        <a href="https://github.com/YoniIfrah" target="_blank"><FiGithub/></a>

    </div>
  )
}

export default HeaderSocials