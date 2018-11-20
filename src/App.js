import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollTop from './Components/ScrollToTop'
import SearchBar from './Components/SearchBar'
import AddressView from './Components/AccountView'
import BlockView from './Components/BlockView'
import TransactionView from './Components/TransactionView'

class App extends Component {
  state = {}
  componentDidMount(){
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <ScrollTop>
            <h1 style={{ textAlign: 'center' }}>Ethereum Block Explorer</h1>
            <SearchBar />
            <Route path="/address/:address" component={AddressView} />
            <Route path="/block/:blockNumber" component={BlockView} />
            <Route path="/tx/:txHash" component={TransactionView} />
          </ScrollTop>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
