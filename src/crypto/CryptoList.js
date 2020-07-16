import React, { Component } from 'react';
import CryptoItem from './CryptoItem'
import './css/CryptoList.css'

const CryptoList = ({ data }) => {
  const list = data.map((item, index) => <CryptoItem data={item} />)
  return (
    <ul className='crypto-list'>
      {list}
    </ul>
  );
}

export default CryptoList;