import React, { Component } from 'react';
import './css/Filter.css'
const Filter = (props) => {
  return (
    <input type="text" placeholder="Filter" onChange={(e) => props.filterMethod(e.target.value)} />
  );
}

export default Filter;