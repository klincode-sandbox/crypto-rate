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
      isUpdated: false,
      filterValue: ''
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

        this.setState({ cryptoData: cryptoDataArray, filteredCryptoData: cryptoDataArray, isUpdated: true })
        //jeśli jest już założony filtr - uwzględniej te wartość
        this.filter(this.state.filterValue);
      })
  }

  tick = () => {
    this.handleTick = setInterval(
      () => {
        this.getData();
      }, 5000
    )
    //to pewnie można rozwiązać dużo lepiej ?  
    this.handleTick2 = setInterval(() => {
      this.setState({ isUpdated: false })
    }, 1000);
  }

  filter = (value) => {
    let filteredItems = this.state.cryptoData;
    let newFilteredArray = filteredItems.filter(item => {
      return item.key.toUpperCase().includes(value.toUpperCase())
    })
    this.setState({ filteredCryptoData: newFilteredArray, filterValue: value })
  }

  componentDidMount() {
    this.tick();
    this.getData();
  }


  componentWillUnmount() {
    clearInterval(this.handleTick);
    clearInterval(this.handleTick2);
  }
  componentDidUpdate(prevProps, prevState) {

    //jeżeli poprzednia cena była inna od aktualnej zaktualizuj pole status [down,up,equal]
    if (prevState.cryptoData !== this.state.cryptoData) {
      const cryptoDataWithStatus = this.state.cryptoData;
      for (let i = 0; i < prevState.cryptoData.length; i++) {
        if (prevState.cryptoData[i].buy > this.state.cryptoData[i].buy) {
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
        <Header rotate={this.state.isUpdated} />
        <Filter filterMethod={this.filter} />
        <CryptoList data={this.state.filteredCryptoData} />
      </>
    );
  }
}

export default Crypto;