import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const Date = ({ data, ...props }) => {
  return(
    <p className="font-bold">{data}</p>
  )
};

Date.propTypes = {
 
};
Date.defaultProps = {
  
};
export default Date;