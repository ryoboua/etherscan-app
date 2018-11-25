import React, { Component } from 'react'
import AccountOverview from './AccountOverview'
import TransactionCard from '../Transaction/TransactionCard';
import Error from '../Error'
import Loader from '../Loader'
import { Box } from 'grommet'
import { isEmpty } from '../../helpers'

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
        const { match } = this.props

        return (
            <Box
                fill
                align="center"
                justify="center"
                wrap
            >   
                <h1>Account Overview</h1>
                { 
                    isEmpty(etherBalance) ? <Loader /> : etherBalance === 'N/A' ? <Error searchTerm="Account" query={match.url} /> :
                    <AccountOverview etherBalance={etherBalance} totalTransaction={transactionList.length} address={address} /> 
                }
                <h1>Recent Transactions</h1>
                { 
                    isEmpty(transactionList) ? <Loader /> : transactionList === 'N/A' ? null :
                    transactionList.map((tx, i) => <TransactionCard key={i} tx={tx} loadAccountData={this.loadAccountData}  />) 
                }
            </Box>
        )
    }
}