import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import ImgProfil from '../atoms/ImgProfil.js';
import Title from '../atoms/title.js';
import DlButton from '../molecules/DlButton.js'
export const Header = ({ data , ...props }) => {

  var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${data.bgImg})`,
  };
  
  return (
    <header style={sectionStyle} className="md:bg-cover xl:h-screen bg-no-repeat">
      <div className="float-right m-2">
        <DlButton data="Télécharger le VC"/>
      </div>
      <div className="mt-80 lg:mt-96 flex flex-col justify-center items-center">
        <ImgProfil PImg={data.ProfilImg} />
        <Title type="h1" data="PAWLONSKI Alex"/>
        <Title type="h2" data="Développeur WEB"/>
      </div>
    </header>
  );
};

Header.propTypes = {
 
};
Header.defaultProps = {
  
};
export default Header;