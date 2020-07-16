import React, { Component } from 'react';
import CryptoItem from './CryptoItem'
import './css/CryptoList.css'

const CryptoList = () => {
  return (
    <ul className='crypto-list'>
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
      <CryptoItem />
    </ul>
  );
}

export default CryptoList;