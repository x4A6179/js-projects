import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';

const Navbar = () => {

  const [nav, setNav] = useState();


  return (
    <div className='top-bar'>
      <div>
        <NavButton href='#home' className='bar-item nav-button'><FontAwesomeIcon icon='home' /> Home</NavButton>
        <NavButton href='#quotes' className='bar-item nav-button'><i className='nv-quotes'></i> Quotes</NavButton>
        <MenuButton className='bar-item menu-button'><FontAwesomeIcon icon='bars' /></MenuButton>
      </div>
    </div>
  )
}

const NavButton = styled.a`
  color: grey;
  text-size: 12px;
  float: left;
  margin-right: 10px;
  margin-top: 5px;
`
const MenuButton = styled.button`
  color: grey;
  float: right;
`

export default Navbar;
