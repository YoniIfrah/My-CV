import React from 'react'
import './skills.css'
import Icon from './Icon'
import { backendSkills, frontendSkills } from '../../assets/skills'

const Skills = () => {

  return (
    <section id='Skills'>
        <h5>The Skils I Have</h5>
        <h2>My Skills</h2>
        <div className='container skill_container'>
          {/* @TODO: fix console error */}
            <div className='skill_fronted'>
            <h3>Frontend Development</h3>
                <article className='skill_details'>
                  {
                    frontendSkills.map((skill) =>(
                      <Icon key={skill.id} skill={skill}></Icon>
                    ))
                  }
                </article>  
            </div>

            <div className='skill_backend'>
              <h3>Backend Development</h3>
              {/* <div className='skill_content'>
            <SkillList skills={['Flask', 'NodeJS' ,'Firebase', 'MongoDB', 'PostgreSQL']}/>
            </div> */}
            <article className='skill_details'>
                  {
                    backendSkills.map((skill) =>(
                      <Icon key={skill.id} skill={skill}></Icon>
                    ))
                  }
                </article>  
            </div>
        </div>
    </section>

  )
}

export default Skills