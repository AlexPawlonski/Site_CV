import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const ImgSkill = ({ data, ...props }) => {
  return(
    <img style={{minWidth:"50px", maxWidth:"100px",minHeight:"50px", maxHeight:"100px"}} src={data.src} alt={data.alt}/>
  )
};

ImgSkill.propTypes = {
 
};
ImgSkill.defaultProps = {
  
};
export default ImgSkill;