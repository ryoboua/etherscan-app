import React, { Component } from 'react'
import TransactionCard from './TransactionCard'
import Error from '../Error'
import Loader from '../Loader'
import { isEmpty } from '../../helpers'


export default class TransactionView extends Component {

    componentDidMount(){
        const { txHash } = this.props.match.params
        this.props.loadTxData(txHash)
    }

    componentDidUpdate(prevProps) {
        const { txHash } = this.props.match.params
        if (txHash !== prevProps.match.params.txHash) {
            this.props.loadTxData(txHash)
        }
    }

    render(){
        const { txData, match } = this.props
        return isEmpty(txData) ? <Loader /> : txData === 'N/A' ? <Error searchTerm="Transaction" query={match.url} /> :
        (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <TransactionCard tx={txData} />
            </div>
        )
    }       
}