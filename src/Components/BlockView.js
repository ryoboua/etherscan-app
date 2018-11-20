import React, { Component } from 'react'
import TransactionCard from './TransactionCard'
import Loader from 'react-loader-spinner'
import { Box, Grommet } from 'grommet'
import { toHex } from 'web3-utils'
import EtherScan from '../ether_scan_api'
import BlockOverview from './BlockOverview';

class BlockView extends Component {
    state = {
        blockData: null,
    }

    componentDidMount(){
        const { blockNumber } = this.props.match.params
        this.getBlockData(blockNumber)
    }
    getBlockData = async blockNumber => {
        const {result: blockData } = await EtherScan.proxy.eth_getBlockByNumber(toHex(blockNumber))
        return this.setState({ blockData })
    }

    render(){
        const { blockNumber } = this.props.match.params
        const { blockData } = this.state
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

export default BlockView