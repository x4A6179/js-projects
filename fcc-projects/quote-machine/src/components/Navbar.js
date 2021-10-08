import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fontawesome';
import './Navbar.css'

const Navbar = () => {

  const [nav, setNav] = useState();
  const [menu, setMenu] = useState(false);

  return (
    <div className='top-bar'>
      <div>
        <a href='#home' className='bar-item nav-button'><FontAwesomeIcon icon='home' /> Home</a>
        <a href='#quotes' className='bar-item nav-button'><i className='nv-quotes'></i> Quotes</a>
        <DropdownMenu />
      </div>
    </div>
  )
}

const DropdownMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className='menu-container'>
      <button className='bar-item menu-button' onClick={onClick}><FontAwesomeIcon icon='bars' transform='grow-5' /></button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href='/connect'>Connect Wallet</a></li>
          <li><a href='/balance'>Show Balance</a></li>
          <li><a href='/signup'>Sign Up</a></li>
        </ul>
      </nav>
    </div>);
}


export default Navbar;
