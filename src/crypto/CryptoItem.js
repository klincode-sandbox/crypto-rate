import React, { Component } from 'react';
import './css/CryptoItem.css'
const CryptoItem = (props) => {
  const arrows = {
    up: String.fromCharCode('8593'),
    down: String.fromCharCode('8595'),
    equal: String.fromCharCode('8596')
  }
  const { data: { buy, key, symbol, status } } = props;
  let arrowSymbol = 'equal';
  let valueClass = 'value '
  switch (status) {
    case 'equal': { arrowSymbol = arrows.equal; valueClass = 'value equal'; break };
    case 'up': { arrowSymbol = arrows.up; valueClass = 'value up'; break; }
    case 'down': { arrowSymbol = arrows.down; valueClass = 'value down'; break; }
    default: arrowSymbol = ''
  }


  return (
    <li className='crypto-item'>
      <span className="title">Last rate: </span>
      <span className={valueClass}>{buy} {arrowSymbol}</span>
      <span className="symbol">{key} [{symbol}] </span>

    </li>
  );
}

export default CryptoItem;