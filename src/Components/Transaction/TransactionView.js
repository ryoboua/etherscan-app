import React, { Component } from 'react'
import TransactionCard from './TransactionCard'
import Loader from 'react-loader-spinner'

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
        return txData !== null ? (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <TransactionCard tx={txData} />
            </div>
        ) : (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Loader
                    style={{ margin: '0 auto'}}
                    type="Triangle"
                    color="Black"
                    height="100"	
                    width="100"
                />
                <h3>Fetching Transaction Data...</h3>
            </div>


        )
    }       
}