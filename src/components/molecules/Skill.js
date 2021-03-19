import React from 'react';
import PannelSkill from './PannelSkill.js';
export const Skill = ({ data , ...props }) => {
  console.log(data);
return(
  <div>
    {data.dataSkill.map( data => <PannelSkill data={data}/>)}
  </div>
)
}
Skill.propTypes = {
 
};
Skill.defaultProps = {
  
};
export default Skill;