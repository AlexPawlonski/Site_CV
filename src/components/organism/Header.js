import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import ImgProfil from '../atoms/ImgProfil.js';
import Title from '../atoms/Title.js';
import DlButton from '../molecules/DlButton.js'
export const Header = ({ data , ...props }) => {

  var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${data.bgImg})`,
    minHeight: "800px"
  };
  
  return (
    <header id="home" style={sectionStyle} className="md:bg-cover h-screen mb-20 bg-no-repeat">
      <div className="float-left m-2 " style={{zIndex:"200"}}>
        <DlButton data="Télécharger le VC"/>
      </div>
      <div className="mt-96 flex flex-col justify-center items-center">
        <ImgProfil PImg={data.ProfilImg} />
        <Title type="h1-w" data={data.name}/>
        <Title type="h2-b" data={data.subTitle}/>
      </div>
    </header>
  );
};

Header.propTypes = {
 
};
Header.defaultProps = {
  
};
export default Header; 