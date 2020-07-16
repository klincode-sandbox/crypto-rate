import React, { Component } from 'react';
import './css/Header.css'

const Header = () => {
  const logo = process.env.PUBLIC_URL + 'BC_Logo.png'
  return (
    <header>
      <img src={logo} alt="Crypto rate logo" />
      <h1>Crypto Rate</h1>
    </header>);
}

export default Header;