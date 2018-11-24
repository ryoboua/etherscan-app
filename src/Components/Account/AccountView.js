import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import AccountOverview from './AccountOverview'
import TransactionCard from '../Transaction/TransactionCard';
import { Box } from 'grommet'

export default class AccountView extends Component {

    componentDidMount(){
        const { address } = this.props.match.params
        this.props.loadAccountData(address)
    }

    componentDidUpdate(prevProps) {
        const { address } = this.props.match.params
        if (address !== prevProps.match.params.address) {
            this.props.loadAccountData(address)
        }
    }

    render(){
        const { transactionList, etherBalance } = this.props.accountData
        const { address } = this.props.match.params

        return (
            <Box
                fill
                align="center"
                justify="center"
                wrap
            >   
                <h1>Account Overview</h1>
                { 
                    etherBalance !== null ? 
                    <AccountOverview etherBalance={etherBalance} totalTransaction={transactionList.length} address={address} /> 
                    : (
                    <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                        <Loader type="Triangle" color="Black" height="100" width="100" />
                        <h3>Fetching Account Info...</h3>
                    </div>
                ) 
                }
                <h1>Recent Transactions</h1>
                { 
                    transactionList !== null ? 
                    transactionList.map((tx, i) => <TransactionCard key={i} tx={tx} loadAccountData={this.loadAccountData}  />) 
                    : (
                    <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                        <Loader type="Triangle" color="Black" height="100" width="100" />
                    <h3>Fetching Transactions...</h3>
                </div>
                ) }
            </Box>
        )
    }
}