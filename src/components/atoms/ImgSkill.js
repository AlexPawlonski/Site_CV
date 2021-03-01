import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const ImgSkill = ({ data, ...props }) => {
  return(
    <img className="w-20" src={data.src} alt={data.alt}/>
  )
};

ImgSkill.propTypes = {
 
};
ImgSkill.defaultProps = {
  
};
export default ImgSkill;