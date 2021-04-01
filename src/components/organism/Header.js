import React from 'react';
import PropTypes from 'prop-types';
import Img from '../atoms/Img.js';
import Title from '../atoms/Title.js';
import DlButton from '../molecules/DlButton.js'
import { Parallax } from 'react-scroll-parallax';
export const Header = ({ data , ...props }) => {

  var sectionStyle = {
    width: "100%",
    backgroundImage: `url(${data.bgImg})`,
    minHeight: "800px"
  };
  window.onscroll = function (e) {
    console.log(e.target.scrollTop);
  }
  return (
    <header id="home" style={sectionStyle} className="md:bg-cover h-screen mb-20 bg-no-repeat">
      <div className="float-left m-2" style={{zIndex:"200"}}>
        <DlButton data="Télécharger le VC"/>
      </div>
      <Parallax y={[0, 100]}>
        <div className="w-full flex flex-col items-center">
          <Img type="user" data={data.ProfilImg}/>
          <Title type="h1-w" data={data.name}/>
          <Title type="h2-b" data={data.subTitle}/>
        </div>
        
      </Parallax>
    </header>
  );
};

Header.propTypes = {
 
};
Header.defaultProps = {
  
};
export default Header; 