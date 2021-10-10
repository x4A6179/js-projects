import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InjectedConnector } from '@web3-react/injected-connector';
import { ethers } from 'ethers';
import './fontawesome';
import './Navbar.css'

const Navbar = () => {

  return (
    <div className='top-bar'>
      <div>
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
          <li><a href='/'><FontAwesomeIcon icon='home' /> Home</a></li>
          <li><a href='/connect' onClick={connectWallet}>Connect Wallet</a></li>
          <li><a href='/aboutus'>About the Team</a></li>
        </ul>
      </nav>
    </div>);
}

function connectWallet() {

}

const injected = new InjectedConnector ({
  supportedChainIds: [1, 3, 4, 5, 42]
})


export default Navbar;
