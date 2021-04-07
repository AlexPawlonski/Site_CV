import React from 'react';
import PropTypes from 'prop-types';


export const Title = ({ type, data, ...props }) => {
  switch (type) {
    case "h1":
      return(
        <h1 className="font-bold text-2xl my-3 mx-0">{data}</h1>
      );
      break;
    case "h1-w":
      return(
        <h1 className="text-white font-bold text-3xl my-3 mx-0 ">{data}</h1>
      );
      break;
    case "h2":
      return(
        <h2 className="text-red-500 font-bold text-2xl">{data}</h2>
      );
      break;
    case "h2-w":
      return(
        <h2 className="text-white font-bold text-xl">{data}</h2>
      );
      break;
    case "h2-b":
      return(
        <h2 className="text-black font-bold text-xl">{data}</h2>
      );
      break;
    case "h3":
      return(
        <h3 className="font-bold text-xl">{data}</h3>
      );
      break;
    case "h3-w":
      return(
        <h3 className="text-white font-bold text-2xl">{data}</h3>
      );
      break;
    case "h3-red":
      return(
        <h3 className="text-red-500 font-bold text-xl text-center">{data}</h3>
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