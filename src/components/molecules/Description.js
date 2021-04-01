import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons/';

const Desc = styled.div`
    height: ${({ open }) => open ? '80px' : '100%'};
    box-shadow: 0px -10px 1px 1px rgba(1000,1000,1000);
    overflow: hidden;
  `;

const Anim = styled.div`
    transform: ${({ open }) => open ? 'rotate(0deg)' : 'rotate(180deg)'};
  `;


export const Description = ({ data, view, ...props }) => {

  const [open, setOpen] = useState(false)

  const FFF = "rgba(150,150,150,0.1 )"
  var sectionStyle = {
    boxShadow: `0px -20px 10px 0px ${FFF}`
  };

  if(view){
    return(
      <div>
        <Desc open={open} className="border-t-2 mt-3 pt-2 pb-5 ">
          {data.map( data => <p>{data}</p>)}
        </Desc>
        <div open={open} style={sectionStyle} onClick={() => setOpen(!open)} className="flex justify-center border-gray-300 border-t-2">
          <Anim open={open} className="cursor-pointer mt-2">
            <FontAwesomeIcon icon={faArrowCircleDown } className=" text-2xl"/>
          </Anim>
        </div>
        
      </div>
    )
  }else{
    return(
      <div  className="border-t-2 mt-2">
        {data.map( data => <p>{data}</p>)}
      </div>
    )
  }
  
};

Description.propTypes = {
 
};
Description.defaultProps = {
  
};
export default Description;