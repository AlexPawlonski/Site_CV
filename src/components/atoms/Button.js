import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ data, ...props }) => {
  console.log(data);
  return(
    <button className=" font-semibold m-1 px-2 py-1 bg-gray-50 border-black hover:bg-gray-300">
      <a href={data.href}>{data.value}</a>
    </button>
  );
};

Button.propTypes = {
 
};
Button.defaultProps = {
  
};
export default Button;