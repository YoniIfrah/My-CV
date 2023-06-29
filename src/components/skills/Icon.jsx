import React from 'react';

const Icon = ({ skill }) => {

  return (
    <div className='icon_color' style={{width: '5rem'}}>
      <div style={{ fontSize: '3rem' }} ><skill.icon /></div> 
      <div className='skill_details-icon'>{skill.name}</div>
    </div>
  );
};

export default Icon;

