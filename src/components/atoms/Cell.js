import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const Cell = ({ data, ...props }) => {
  let link = "#"+data.value
  return(
    <li style={{padding: "0px"}} className="w-full flex justify-center"><a className=" py-2 items-center w-full h-full flex justify-center border-b-2 border-red-500 cursor-pointer hover:border-red-200"href={link}>{data.name}</a></li>
  );
};

Cell.propTypes = {
 
};
Cell.defaultProps = {
  
};
export default Cell;