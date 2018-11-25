import React, { Component } from 'react'
import TransactionCard from '../Transaction/TransactionCard'
import Loader from '../Loader'
import { Box, Grommet } from 'grommet'
import BlockOverview from './BlockOverview';
import { isEmpty } from '../../helpers'

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
                        isEmpty(blockData) ? <Loader /> : 
                        <BlockOverview blockNumber={blockNumber} blockData={blockData} /> 
                    }

                    <h1>Block Transactions</h1>
                    {                         
                        isEmpty(blockData) ? <Loader /> :
                        blockData.transactions.map((tx, i) => (
                            <TransactionCard key={i} tx={tx} getAccountData={() => null} />
                        ))
                    }
                </Box>
            </Grommet>

        )
    }
}