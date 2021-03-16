import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

export const Title = ({ type, data, ...props }) => {

  let text;

  switch (type) {
    case "h1":
      return(
        <h1 className="font-bold text-2xl my-3 mx-0">{data}</h1>
      );
      break;
    case "h2":
      return(
        <h2 className="text-red-500 font-bold">{data}</h2>
      );
      break;
    case "h2-w":
      return(
        <h2 className="text-white font-bold">{data}</h2>
      );
      break;
    case "h2-b":
      return(
        <h2 className="text-black font-bold">{data}</h2>
      );
      break;
    case "h3":
      return(
        <h3>{data}</h3>
      );
      break;
  
    default:
        <p>enter a type and value</p>
      break;
  }

};

Title.propTypes = {
 
};
Title.defaultProps = {
  
};
export default Title;