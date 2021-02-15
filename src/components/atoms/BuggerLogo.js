import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/';
export const BuggerLogo = ({ data, ...props }) => {
  var Style = {
    width:"0.660em",
    height: "0.660em"
  };
  
  return(
    <div className="">
      <FontAwesomeIcon icon={faBars} style={Style} className="text-white text-6xl px-2 m-2 bg-red-500 rounded"/>
    </div>
  );
};

BuggerLogo.propTypes = {
 
};
BuggerLogo.defaultProps = {
  
};
export default BuggerLogo;