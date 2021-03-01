import React from 'react';
import Title from '../atoms/Title.js'
import Date from '../atoms/Date.js'
import Description from './Description.js';
export const Course = ({ data , ...props }) => {
  console.log(data.dataSection);
  let xp = data.dataSection.xp;
return(
  <div>
    {xp.map( xp => <div>
      <Title type="h2" data={xp.title}/>
      <div>
        <Date data={xp.date}/>   
        <Description data={xp.desc}/>                                                        
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