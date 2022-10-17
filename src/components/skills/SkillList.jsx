import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const SkillList = ({skills}) => {

    // in case skills list is empty return
    if (!skills) {
      console.log('error in variable:', skills);
      return;
    }

  const style={width:'6rem'}
  return (
    <article className='skill_details'>
    {skills.map(skill => (
      <>
      <div style={style}>
        {/* @TODO: need to be sent by children */}
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