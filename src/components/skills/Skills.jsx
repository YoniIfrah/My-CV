import React from 'react'
import './skills.css'
import SkillList from './SkillList'

const Skills = () => {

  return (
    <section id='Skills'>
        <h5>The Skils I Have</h5>
        <h2>My Skills</h2>
        <div className='container skill_container'>
            <div className='skill_fronted'>

                <h3>Frontend Development</h3>
                <div className='skill_content'>
                <SkillList output='frontend'/>
                </div>

            </div>
            <div className='skill_backend'>

            <h3>Backend Development</h3>
            <div className='skill_content'>
            <SkillList output='backend'/>
            </div>


            </div>
        </div>
    </section>

  )
}

export default Skills