import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
export const MenuNav = ({ data , ...props }) => {
  const link = data;
  return (
    <nav className=" bg-red-500 text-white w-full">
      <ul className="flex justify-around ">
        {link.map( nav => <li className="w-full flex justify-center border-b-2 border-red-500 cursor-pointer hover:border-red-200"><a>{nav.name}</a></li> )}
      </ul>
      
    </nav>
  );
};

MenuNav.propTypes = {
 
};
MenuNav.defaultProps = {
  
};
export default MenuNav;