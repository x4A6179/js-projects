import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';

const Navbar = () => {

  const [nav, setNav] = useState();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    
  }


  return (
    <div className='top-bar' style={style}>
      <div>
        <NavButton href='#home' className='bar-item nav-button'><FontAwesomeIcon icon='home' /> Home</NavButton>
        <NavButton href='#quotes' className='bar-item nav-button'><i className='nv-quotes'></i> Quotes</NavButton>
        <MenuButton className='bar-item menu-button' onClick={handleMenu}><FontAwesomeIcon icon='bars' transform='grow-10' /></MenuButton>
      </div>
    </div>
  )
}

const NavButton = styled.a`
  color: black;
  font-size: 18px;
  float: left;
  margin-right: 10px;
  margin-top: 15px;
  padding-left: 5px;
  text-decoration: none;

  :hover {
    color: red;
  }
`
const MenuButton = styled.button`
  color: black;
  position: relative;
  float: right;
  background-color: transparent;
  border-shadow: none;
  border: none;
  margin-top: 15px;
  margin-right: 25px;
`
const style = {
  minWidth: '99vw'
}

export default Navbar;
