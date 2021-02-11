import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const ImgProfil = ({ PImg, ...props }) => {
  return (
    <img src={PImg.src} alt={PImg.alt} style={{minWidth:"200px", maxWidth:"250px"}} className="w-4/12 rounded-full"/>
  );
};

ImgProfil.propTypes = {
 
};
ImgProfil.defaultProps = {
  
};
export default ImgProfil;