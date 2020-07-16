import React, { Component } from 'react';
import './css/CryptoItem.css'
const CryptoItem = (props) => {
  const arrows = {
    up: String.fromCharCode('8596'),
    down: String.fromCharCode('8595'),
    leftRight: String.fromCharCode('8596')
  }
  // const arrow = ;
  const { data: { buy, key, symbol } } = props;

  console.log(props);
  return (
    <li className='crypto-item'>
      <span className="title">Last rate: </span>
      <span className="value">{buy}  </span>
      <span className="symbol">{key} [{symbol}] </span>

    </li>
  );
}

export default CryptoItem;