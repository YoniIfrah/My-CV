import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const SkillList = (props) => {
    const Skills = props.skills;
    if (!Skills) {
      console.log('error in variable:', Skills);
      return;
    }
    const style={width:'6rem'}
  return (
    <article className='skill_details'>
    {Skills.map(skill => (
      <>
      <div style={style}>
      <BsPatchCheckFill className='skill_details-icon'/>
      <h4>
        {skill}
      </h4>
      </div>
      </>

      ))}
    </article>
  );
}

export default SkillList