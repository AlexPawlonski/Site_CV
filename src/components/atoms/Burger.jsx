import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from '../organism/RightNav.jsx';

const StyledBurger = styled.div`
  height: 2.5rem;
  position: fixed;
  top: 8px;
  right: 10px;
  z-index: 300;
  display: none;
  background-color: rgba(239, 68, 68); 
  padding: 6px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({data, ...props}) => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)} className="cursor-pointer">
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} data={data}/>
    </>
  )
}

export default Burger
