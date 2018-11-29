import React, { Component, Fragment } from "react"
import { BrowserRouter as Router } from "react-router-dom"

import ScrollTop from "./Components/ScrollToTop"
import SearchBar from "./Components/SearchBar"
import Title from "./Components/Title"
import { AccountRoute, BlockRoute, TxRoute } from "./Routes/index"

import client from "./client"

class App extends Component {
  state = {
    accountData: {
      etherBalance: null,
      transactionList: null,
      totalTransactionCount: null
    },
    blockData: null,
    txData: null
  }

  setStateAsync = state => {
    return new Promise(resolve => {
      this.setState(state, resolve)
    })
  }

  loadAccountData = address =>
    client.fetchAccountData(address).then(async res => {
      await this.setStateAsync({
        accountData: {
          etherBalance: null,
          transactionList: null,
          totalTransactionCount: null
        }
      })
      return this.setState({
        accountData: { ...this.state.accountData, ...res }
      })
    })

  loadBlockData = blockNumber =>
    client
      .fetchBlockData(blockNumber)
      .then(blockData => this.setState({ blockData }))

  loadTxData = txHash =>
    client.fetchTxData(txHash).then(txData => this.setState({ txData }))

  loadTransactionList = (address, page = 1) =>
    client
      .fetchAccountTransactionList(address, page)
      .then(listOfNewTransactions => {
        this.setState({
          accountData: {
            ...this.state.accountData,
            transactionList: [
              ...this.state.accountData.transactionList,
              ...listOfNewTransactions
            ]
          }
        })
      })

  render() {
    const {
      state: { accountData, blockData, txData },
      loadAccountData,
      loadTransactionList,
      loadBlockData,
      loadTxData
    } = this

    return (
      <Router>
        <Fragment>
          <ScrollTop>
            <Title />
            <SearchBar />
            <AccountRoute
              path="/address/:address"
              accountData={accountData}
              loadAccountData={loadAccountData}
              loadTransactionList={loadTransactionList}
            />
            <BlockRoute
              path="/block/:blockNumber"
              blockData={blockData}
              loadBlockData={loadBlockData}
            />
            <TxRoute
              path="/tx/:txHash"
              txData={txData}
              loadTxData={loadTxData}
            />
          </ScrollTop>
        </Fragment>
      </Router>
    )
  }
}

export default App
