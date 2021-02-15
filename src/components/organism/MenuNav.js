import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import Cell from '../atoms/Cell.js'
import BuggerLogo from '../atoms/BuggerLogo.js';
export const MenuNav = ({ data , ...props }) => {
  const link = data;
  function test(){
    console.log('ok');
    
  }
  return (
    <div>
      <div onClick={test} className="lg:hidden fixed top-0 left-40 cursor-pointer">
        <BuggerLogo />
      </div>
      <nav className=" bg-red-500 text-white lg:w-full w-40 top-0 fixed lg:h-auto h-screen lg:border-0 lg:relative border-red-200  border-b-8">
        <ul className="lg:flex lg:justify-around ">
          {link.map( nav => <div className="my-6"><Cell data={nav} /></div> )}
        </ul>
      </nav> 
    </div>
    
  );
};

MenuNav.propTypes = {
 
};
MenuNav.defaultProps = {
  
};
export default MenuNav;