import React from 'react';
import styled from 'styled-components';
import Cell from '../atoms/Cell.js'
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 0p;
  width: 100%;
  background-color: rgba(239, 68, 68);
  li {
    padding: 10px 10px;
    color: #fff;
  }

  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open, data, ...props}) => {

  const link = data;

  return (
    <Ul open={open}>
        {link.map( nav => <Cell data={nav} />)}
    </Ul>
  )
}

export default RightNav
