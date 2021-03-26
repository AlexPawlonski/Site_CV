import React from 'react';
import PropTypes from 'prop-types';


export const Img = ({ data, type, ...props }) => {
  switch (type) {
    case "xp":
      return(
        <img style={{minWidth:"50px", maxWidth:"100px",minHeight:"50px", maxHeight:"100px"}} src={data.src} alt={data.alt}/>
      );
      break;
    case "skill":
      return(
        <img style={{minWidth:"20px", maxWidth:"70px",minHeight:"20px", maxHeight:"70px"}} src={data.src} alt={data.alt}/>
      );
      break;
    case "user":
      return(
        <img src={data.src} alt={data.alt} style={{minWidth:"200px", maxWidth:"250px"}} className="w-4/12 rounded-full"/>
      );
      break;
    case "project":
      return(
        <img src={data.src} alt={data.alt} style={{}} className="w-full"/>
      );
      break;
    case "slideShow":
      return(
        <img src={data.src} alt={data.alt} style={{}} className="w-full"/>
      );
      break;
    default:
        <p>enter a type and value</p>
      break;
  }
 
};

Img.propTypes = {
 
};
Img.defaultProps = {
  
};
export default Img;