import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ data, ...props }) => {
  console.log(data);
  return(
    <a href={data.src} target="_blank" className=" text-center font-semibold text-white bg-red-700 transform hover:scale-105 duration-100 cursor-pointer m-1 px-2 py-1 ">
      <p>{data.value}</p>
    </a>
  );
};

Button.propTypes = {
 
};
Button.defaultProps = {
  
};
export default Button;