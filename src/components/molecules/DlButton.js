import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import DlCv from '../../dl/cvDéveloppeur.png'
import Title from '../atoms/Title.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons/';
export const DlButton = ({ data, ...props }) => {

  

  return (
    <a href={DlCv} target="_blanck" className="bg-red-500 text-white p-2 flex justify-center items-center rounded-md cursor-pointer">
      <FontAwesomeIcon icon={faFileDownload} className="m-1"/>
      <Title type="h3" data={data}/>
    </a>
  );
};

DlButton.propTypes = {
 
};
DlButton.defaultProps = {
  
};
export default DlButton;