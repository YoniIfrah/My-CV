import React from 'react'
import CV from '../../assets/cv.pdf'
import Toggle from '../toggle/Toggle'


const CTA = () => {
  return (
    <div className='cta'>
        <Toggle/>
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA