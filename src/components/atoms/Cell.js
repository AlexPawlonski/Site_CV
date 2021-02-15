import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const Cell = ({ data, ...props }) => {
  return(
    <li className="w-full flex justify-center border-b-2 border-red-500 cursor-pointer hover:border-red-200"><a>{data.name}</a></li>
  );
};

Cell.propTypes = {
 
};
Cell.defaultProps = {
  
};
export default Cell;