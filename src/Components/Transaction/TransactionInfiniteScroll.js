import React, { Component } from "react"
import { Box, InfiniteScroll } from "grommet"
import TransactionCard from './TransactionCard'

export default class TransactionInfiniteScroll extends Component {
  state = { page: 1 }
  nextPage = () =>
    this.setState({ page: this.state.page + 1 }, () =>
      this.props.loadTransactionList(this.props.address, this.state.page)
    )
  render() {
    const { transactionList } = this.props
    return (
      <Box fill align="center" justify="center" wrap>
        <InfiniteScroll
          items={transactionList}
          step={2}
          onMore={() => this.nextPage()}
        >
          {(items, i) => <TransactionCard key={i} tx={items} />}
        </InfiniteScroll>
      </Box>
    )
  }
}