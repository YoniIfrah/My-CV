import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const SkillList = (props) => {
    const output = props.output;
    var Skills;
    if (output === 'frontend'){
      Skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap',];
    } else if (output === 'backend'){
      Skills = ['Django', 'NodeJS' ,'Firebase', 'MongoDB', 'PostgreSQL'];
    } else {
      console.log('error in variable:', output);
      return;
    }
    const style={width:'6rem'}
  return (
    <article className='skill_details'>
    {Skills.map(skill => (
      <>
      <div style={style}>
      <BsPatchCheckFill className='skill_details-icon'/><h4>
        {skill}
      </h4>
      </div>
      </>

      ))}
    </article>
  );
}

export default SkillList