import React, { Component } from 'react'
import EtherScan from '../ether_scan_api'
import Loader from 'react-loader-spinner'
import AccountOverview from './AccountOverview'
import TransactionCard from './TransactionCard';
import { Box } from 'grommet'

class AccountView extends Component {

    state = {
        etherBalance: null,
        transactionList: null,
        totalTransaction: null,
    }

    async componentDidMount(){
        const { address } = this.props.match.params
        this.getAccountData(address)
    }
    getAccountData = async address => {
        const { result: etherBalance } = await EtherScan.account.balance(address)
        const { result: transactionList } = await EtherScan.account.txlist(address, 1, 'latest', 'desc')

        return this.setState({ etherBalance, transactionList })
    }
    render(){
        const { transactionList, etherBalance } = this.state
        const { address } = this.props.match.params

        return (
            <Box
                fill
                align="center"
                justify="center"
                wrap
            >   
                <h1>Account Overview</h1>
                { etherBalance !== null ? <AccountOverview etherBalance={etherBalance} totalTransaction={transactionList.length} address={address} /> : (
                    <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                    <Loader
                        type="Triangle"
                        color="Black"
                        height="100"	
                        width="100"
                    />
                    <h3>Fetching Account Info...</h3>
                </div>
                    
                ) }
                <h1>Recent Transactions</h1>
                { transactionList !== null ? transactionList.map((tx, i) => <TransactionCard key={i} tx={tx} getAccountData={this.getAccountData}  />) : (
                    <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                    <Loader
                        type="Triangle"
                        color="Black"
                        height="100"	
                        width="100"
                    />
                    <h3>Fetching Transactions...</h3>
                </div>
                ) }
            </Box>
        )
    }
}

AccountView.defaultProps = {
    match: {
        params: {
            address: 'This is an AccountView'
        }
    }
}

export default AccountView