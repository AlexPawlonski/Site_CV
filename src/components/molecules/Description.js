import React from 'react';
import PropTypes from 'prop-types';

export const Description = ({ data, ...props }) => {
  return(
    <div>
      <p>{data}</p>
    </div>
  )
};

Description.propTypes = {
 
};
Description.defaultProps = {
  
};
export default Description;