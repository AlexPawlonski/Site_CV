import React from 'react';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import Img from '../atoms/Img.js'


export const SlideShow = ({ data , ...props }) => {
  console.log(data);
  return(
    <Carousel showStatus={false} showThumbs={false}>
        {data.map( data => <div className=""><Img type="slideShow" data={data}/></div>)}
    </Carousel>
  )
};

SlideShow.propTypes = {
 
};
SlideShow.defaultProps = {
  
};
export default SlideShow; 