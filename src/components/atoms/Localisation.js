import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


export const Localisation = ({ data, ...props }) => {
  return(
    <div className="flex items-center">
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      <p className="m-1">{data}</p>
    </div>
    
  )
};

Localisation.propTypes = {
 
};
Localisation.defaultProps = {
  
};
export default Localisation;