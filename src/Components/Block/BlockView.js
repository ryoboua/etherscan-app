import React, { Component } from 'react'
import TransactionCard from '../Transaction/TransactionCard'
import Loader from 'react-loader-spinner'
import { Box, Grommet } from 'grommet'
import BlockOverview from './BlockOverview';

export default class BlockView extends Component {

    componentDidMount(){
        const { blockNumber } = this.props.match.params
        this.props.loadBlockData(blockNumber)
    }

    componentDidUpdate(prevProps) {
        const { blockNumber } = this.props.match.params
        if (blockNumber !== prevProps.match.params.address) {
            this.props.loadBlockData(blockNumber)
        }
    }

    render(){
        const { blockNumber } = this.props.match.params
        const { blockData } = this.props
        return (
            <Grommet>
                <Box
                    fill
                    align="center"
                    justify="center"
                    wrap
                >
                    <h1 style={{ textAlign: 'center' }}>Block Overview</h1>
                    {
                        blockData !== null ? 
                        <BlockOverview blockNumber={blockNumber} blockData={blockData} /> 
                        : (
                        <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                            <Loader type="Triangle" color="Black" height="100" width="100" />
                            <h3>Fetching Block Data...</h3>
                        </div>
                    )}

                    <h1>Block Transactions</h1>
                    { blockData !== null ? 
                    blockData.transactions.map((tx, i) => (
                        <TransactionCard key={i} tx={tx} getAccountData={() => null} />
                    ))
                    :(
                    <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                        <Loader type="Triangle" color="Black" height="100" width="100" />
                        <h3>Fetching Block Transactions...</h3>
                    </div>
                    ) }
                </Box>
            </Grommet>

        )
    }
}