import React from 'react';
import Info from './Info.js';
import Skill from './Skill.js';
import Goal from './Goal.js';
import Contact from './Contact.js';
import Course from './Course.js'
export const Pannel = ({ data , ...props }) => {
 switch (data.id) {
   case 0:
     return(
         <Info data={data}/>
     );
     break;
   case 1:
     return(
      <Course data={data}/>
     );
     break;
   case 2:
     return(
      <Skill data={data}/>
     );
     break;
   case 3:
     return(
      <Goal data={data}/>
     );
     break;
   case 4:
     return(
      <Contact data={data}/>
     );
     break;

   default:
     return(
       <p>rien</p>
     )
     break;
 }
};

Pannel.propTypes = {
 
};
Pannel.defaultProps = {
  
};
export default Pannel; 