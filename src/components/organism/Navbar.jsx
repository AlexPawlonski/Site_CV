import React from 'react';
import styled from 'styled-components';
import Burger from '../atoms/Burger.jsx';

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = ({data, ...props}) => {
  return (
    <Nav>
      <Burger data={data}/>
    </Nav>
  )
}

export default Navbar
