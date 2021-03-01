import React from 'react';
import ImgSkill from '../atoms/ImgSkill.js'
import InfoBulleSkill from '../atoms/InfoBulleSkill.js'
export const PannelSkill = ({ data , ...props }) => {
    console.log(data.imgSkill);
return(
    <div>
        <ImgSkill data={data.imgSkill}/>
        <InfoBulleSkill data={data.desc}/>
    </div>
)
}
PannelSkill.propTypes = {
 
};
PannelSkill.defaultProps = {
  
};
export default PannelSkill;