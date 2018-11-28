import React, { Component } from "react"
import AccountOverview from "./AccountOverview"
import TransactionInfiniteScroll from '../Transaction/TransactionInfiniteScroll'
import Error from "../Error"
import Loader from "../Loader"
import { Box } from "grommet"
import { isEmpty } from "../../helpers"


export default class AccountView extends Component {
  componentDidMount() {
    const { address } = this.props.match.params
    this.props.loadAccountData(address)
  }

  componentDidUpdate(prevProps) {
    const { address } = this.props.match.params
    if (address !== prevProps.match.params.address) {
      this.props.loadAccountData(address)
    }
  }

  render() {
    const {
      props: {
        loadTransactionList,
        accountData: { transactionList, etherBalance, totalTransactionCount },
        match: {
          params: { address },
          url
        }
      }
    } = this

    return (
      <Box fill align="center" justify="center" wrap>
        <h1>Account Overview</h1>
        {isEmpty(etherBalance) ? (
          <Loader />
        ) : etherBalance === "N/A" ? (
          <Error searchTerm="Account" query={url} />
        ) : (
          <AccountOverview
            etherBalance={etherBalance}
            totalTransaction={totalTransactionCount}
            address={address}
          />
        )}
        <h1>Recent Transactions</h1>
        {isEmpty(transactionList) ? (
          <Loader />
        ) : transactionList === "N/A" ? null : (
          <TransactionInfiniteScroll
            transactionList={transactionList}
            loadTransactionList={loadTransactionList}
            address={address}
          />
        )
        // (
        //   transactionList.map((tx, i) => (
        //     <TransactionCard
        //       key={i}
        //       tx={tx}
        //     />
        //   ))
        // )
        }
      </Box>
    )
  }
}
