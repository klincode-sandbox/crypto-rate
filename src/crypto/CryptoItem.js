import React, { Component } from 'react';
import './css/CryptoItem.css'
const CryptoItem = (props) => {
  const arrows = {
    up: &#8596,
    down: '	&#8595;',
    leftRight: '	&#8596;'
  }
  const upArrow = '	&#8596;'

  const { value = 0, symbol = ' - ' } = props;
  return (
    <li className='crypto-item'>
      <span className="title">Last rate: </span>
      <span className="value">{arrows.up}  {value} </span>
      <span className="symbol">{symbol} </span>

    </li>
  );
}

export default CryptoItem;