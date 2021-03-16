import React from 'react';
import styled from 'styled-components';
import Burger from '../atoms/Burger.jsx';

const Nav = styled.nav`
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
