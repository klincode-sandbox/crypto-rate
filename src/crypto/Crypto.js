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
      filteredCryptoData: [],
      isUpdated: false
    }
  }

  dataToArray = (data) => {
    const dataToArray = Object.keys(data).map(
      (item) => {
        let objectWithKey = data[item];
        objectWithKey['key'] = item;
        objectWithKey['status'] = 'equal'
        return objectWithKey
      })
    return dataToArray
  }


  getData = () => {
    Axios.get('https://blockchain.info/pl/ticker')
      .then(response => {
        const cryptoData = response.data;
        const cryptoDataArray = this.dataToArray(cryptoData);
        this.setState({ cryptoData: cryptoDataArray, filteredCryptoData: cryptoDataArray })

      })
  }

  tick = () => {
    this.handleTick = setInterval(
      () => {
        this.getData();
      }, 50000
    )
  }
  filter = (value) => {
    // console.log(value.toUpperCase());
    let filteredItems = this.state.cryptoData;
    let newFilteredArray = filteredItems.filter(item => {
      return item.key.toUpperCase().includes(value.toUpperCase())
    })
    this.setState({ filteredCryptoData: newFilteredArray })
  }
  componentDidMount() {
    this.tick();
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    //jeżeli poprzednia cena była inna od aktualnej zaktualizuj pole status [down,up,equal]
    if (prevState.cryptoData !== this.state.cryptoData) {
      const cryptoDataWithStatus = this.state.cryptoData;
      for (let i = 0; i < prevState.cryptoData.length; i++) {
        if (prevState.cryptoData[i].buy > this.state.cryptoData[i].buy) {
          //spadek ceny
          cryptoDataWithStatus[i]['status'] = 'down'
        } else if (prevState.cryptoData[i].buy < this.state.cryptoData[i].buy) {
          cryptoDataWithStatus[i]['status'] = 'up'
        } else
          cryptoDataWithStatus[i]['status'] = 'equal'
      }
      this.setState({ cryptoData: cryptoDataWithStatus })
    }
  }
  render() {
    return (
      <>
        <Header />
        <Filter filterMethod={this.filter} />
        <CryptoList data={this.state.filteredCryptoData} />
      </>
    );
  }
}

export default Crypto;