import React, { Component } from 'react';
import Header from './Header'
import Filter from './Filter';
import CryptoList from './CryptoList';
import Axios from 'axios'
class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getData = () => {
    Axios.get('https://blockchain.info/pl/ticker')
      .then(response => {
        const cryptoData = response.data;
        console.log(cryptoData);

      })
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <Header />
        <Filter />
        <CryptoList />
      </>
    );
  }
}

export default Crypto;