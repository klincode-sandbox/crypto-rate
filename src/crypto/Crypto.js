import React, { Component } from 'react';
import Header from './Header'
import Filter from './Filter';
import CryptoList from './CryptoList';
import Axios from 'axios'
class Crypto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoData: [],
      cryptoDataPrev: {},
    }
  }

  dataToArray = (data) => {
    const dataToArray = Object.keys(data).map(
      (item) => {
        let objectWithKey = data[item];
        objectWithKey['key'] = item;
        return objectWithKey
      })

    this.setState({ cryptoData: dataToArray })
    console.log(dataToArray);
    return dataToArray
  }


  getData = () => {
    Axios.get('https://blockchain.info/pl/ticker')
      .then(response => {
        const cryptoData = response.data;
        this.dataToArray(cryptoData)
      })
  }
  componentDidMount() {
    // this.tick();
    this.getData();
  }

  tick = () => {
    this.handleTick = setInterval(
      () => {
        this.getData();
      }, 30000
    )
  }
  render() {
    return (
      <>
        <Header />
        <Filter />
        <CryptoList data={this.state.cryptoData} />
      </>
    );
  }
}

export default Crypto;