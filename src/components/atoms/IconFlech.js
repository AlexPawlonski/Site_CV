import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
export const IconFlech = ({ data, ...props }) => {
  return(
    <FontAwesomeIcon icon={faArrowAltCircleDown} className="m-1"/>
  )
};

IconFlech.propTypes = {
 
};
IconFlech.defaultProps = {
  
};
export default IconFlech;