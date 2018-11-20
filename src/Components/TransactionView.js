import React, { Component } from 'react'
import TransactionCard from './TransactionCard'
import EtherScan from '../ether_scan_api'
import Loader from 'react-loader-spinner'

export default class TransactionView extends Component {
    state = {
        txData: null,
    }

    componentDidMount(){
        const { txHash } = this.props.match.params
        this.getTxData(txHash)
    }
    getTxData = async txHash => {
        const { result: txData } = await EtherScan.proxy.eth_getTransactionByHash(txHash)
        return this.setState({ txData })
    }

    render(){
        const { txData } = this.state
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