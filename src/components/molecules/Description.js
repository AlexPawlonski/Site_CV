import React from 'react';
import PropTypes from 'prop-types';

export const Description = ({ data, ...props }) => {
  return(
    <div className="border-t-2 mt-2">
      <p>{data}</p>
    </div>
  )
};

Description.propTypes = {
 
};
Description.defaultProps = {
  
};
export default Description;