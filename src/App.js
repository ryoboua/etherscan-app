import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import ScrollTop from './Components/ScrollToTop'
import SearchBar from './Components/SearchBar'
import Title from './Components/Title'
import { AccountRoute, BlockRoute, TxRoute } from './Routes/index'

import client from './client'

class App extends Component {
  state = {
    accountData: {
      etherBalance: null,
      transactionList: null,
    },
    blockData: null,
    txData: null,
  }

  loadAccountData = address => client.fetchAccountData(address)
                              .then(res => this.setState({ accountData: {...this.state.accountData, ...res} }))
                  
  loadBlockData = blockNumber => client.fetchBlockData(blockNumber)
                                .then(blockData => this.setState({ blockData }))

  loadTxData = txHash => client.fetchTxData(txHash)
                                .then(txData => this.setState({ txData }))
                                    
  render() {
    const { accountData, blockData, txData } = this.state

    return (
      <Router>
        <React.Fragment>
          <ScrollTop>
            <Title />
            <SearchBar />
              <AccountRoute 
                path="/address/:address" 
                accountData={accountData}
                loadAccountData={this.loadAccountData}
              />
              <BlockRoute 
                path="/block/:blockNumber"
                blockData={blockData}
                loadBlockData={this.loadBlockData}
              />
              <TxRoute 
                path="/tx/:txHash"
                txData={txData}
                loadTxData={this.loadTxData}
              />
          </ScrollTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default App