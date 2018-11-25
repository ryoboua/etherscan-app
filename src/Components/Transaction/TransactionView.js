import React, { Component } from 'react'
import TransactionCard from './TransactionCard'
import Loader from '../Loader'
import { isEmpty } from '../../helpers'

export default class TransactionView extends Component {

    componentDidMount(){
        const { txHash } = this.props.match.params
        this.props.loadTxData(txHash)
    }

    componentDidUpdate(prevProps) {
        const { txHash } = this.props.match.params
        if (txHash !== prevProps.match.params.address) {
            this.props.loadTxData(txHash)
        }
    }

    render(){
        const { txData } = this.props
        return isEmpty(txData) ? <Loader /> :
        (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <TransactionCard tx={txData} />
            </div>
        )
    }       
}