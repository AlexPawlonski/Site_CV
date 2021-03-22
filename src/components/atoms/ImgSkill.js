import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const ImgSkill = ({ data, ...props }) => {
  return(
    <img style={{minWidth:"20px", maxWidth:"70px",minHeight:"20px", maxHeight:"70px"}} src={data.src} alt={data.alt}/>
  )
};

ImgSkill.propTypes = {
 
};
ImgSkill.defaultProps = {
  
};
export default ImgSkill;