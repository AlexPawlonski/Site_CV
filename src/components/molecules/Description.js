import React from 'react';
import PropTypes from 'prop-types';
import IconFlech from '../atoms/IconFlech.js'

export const Description = ({ data, ...props }) => {
  return(
    <div>
      <p>{data}</p>
      <IconFlech/>
    </div>
  )
};

Description.propTypes = {
 
};
Description.defaultProps = {
  
};
export default Description;