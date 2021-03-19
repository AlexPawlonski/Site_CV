import React from 'react';
import Title from '../atoms/Title.js'
import Date from '../atoms/Date.js'
import ImgSkill from '../atoms/ImgSkill.js';
import Description from './Description.js';
import Localisation from '../atoms/Localisation.js';

export const Course = ({ data , ...props }) => {
  console.log(data.dataSection);
  let xp = data.dataSection.xp;
return(
  <div>
    {xp.map( data => <div className="bg-white rounded-lg p-6 flex">
      <ImgSkill data={data.imgXp}/>
      <div>
        <Title type="h2" data={data.title}/>
        <div>
          <Date data={data.date}/>
          <Localisation data={data.map}/>
          <Description data={data.desc}/>                                                        
        </div>
      </div>
    </div>)}
  </div>
)
}
Course.propTypes = {
 
};
Course.defaultProps = {
  
};
export default Course; 