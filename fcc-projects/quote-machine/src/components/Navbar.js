import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ethers } from 'ethers';
import './fontawesome';
import './Navbar.css'
import { useWeb3React } from '@web3-react/core';
import { injected } from './wallet/Connectors';


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
  const { active, account, library, activate, deactivate } = useWeb3React();

  async function connect() {
    try {
      await activate(injected)
    } catch (er) {
      console.log(er)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (er) {
      console.log(er)
    }
  }

  return (
    <div className='menu-container'>
      <button className='bar-item menu-button' onClick={onClick}><FontAwesomeIcon icon='bars' transform='grow-5' /></button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href='/'><FontAwesomeIcon icon='home' /> Home</a></li>
          {!active
            ? <div>
            <li>
              <a href='#connect' onClick={connect}>Connect To Metamask</a>
            </li>
            </div>
            : <div>
          <li>
            <a href='#' onClick={disconnect}>Disconnect</a>
          </li>
          </div>

          }
          <li><a href='/aboutus'>About the Team</a></li>
        </ul>
      </nav>
    </div>);
}


export default Navbar;
