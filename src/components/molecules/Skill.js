import React from 'react';
import PannelSkill from './PannelSkill.js';
export const Skill = ({ data , ...props }) => {
  let panelleSkill = data.dataSkill
  console.log(panelleSkill);
return(
  <div>
    {panelleSkill.map( data => <PannelSkill data={data} />)}
  </div>
)
}
Skill.propTypes = {
 
};
Skill.defaultProps = {
  
};
export default Skill;