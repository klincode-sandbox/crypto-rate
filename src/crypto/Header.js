import React, { Component } from 'react';
import './css/Header.css'

const Header = (props) => {
  console.log(props.rotate);
  const logo = process.env.PUBLIC_URL + 'BC_Logo.png'
  return (
    <header>
      <img src={logo} alt="Crypto rate logo" className={props.rotate ? 'rotate' : null} />
      <h1>Crypto Rate</h1>
    </header>);
}

export default Header;