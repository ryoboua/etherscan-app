import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import { Box, Grommet } from 'grommet'
import { Link } from 'react-router-dom'
import { toHex } from 'web3-utils'
import { getDate, toNumber } from '../helpers'


import EtherScan from '../ether_scan_api'



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
                <h1 style={{ textAlign: 'center' }}>Block Overview</h1>
                <Box
                    elevation="xlarge"
                    round="small"
                    responsive
                    width="800px"
                    margin="medium"
                    animation="fadeIn"
                    background={{
                    color: 'white',
                    opacity: 'medium'
                    }}
                    style={{
                        margin: '0 auto'
                    }}
                >
                {blockData !== null ? (
                <React.Fragment>
                    <div style={{padding: '0 2em'}} >
                        <h5>
                            Height: {toNumber(blockNumber)}
                        </h5>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h5>
                            Date Mined: {getDate(blockData.timestamp)}
                        </h5>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h5>
                            Transactions: {blockData.transactions.length}
                        </h5>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h5>
                        TxHash: <Link to={`/tx/${blockData.hash}`} style={{ textDecoration: 'none', color: 'black' }} ><h3 truncate="true">{blockData.hash}</h3></Link>
                        </h5>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h5>
                            Mined By: <Link to={`/address/${blockData.miner}`} style={{ textDecoration: 'none', color: 'black' }} >{blockData.miner}</Link>
                        </h5>
                    </div>
                </React.Fragment>
                ) : (
                    <div style={{ textAlign: 'center', paddingTop: '1em' }}>
                        <Loader
                            type="Triangle"
                            color="Black"
                            height="100"	
                            width="100"
                        />
                        <h3>Fetching Block Data...</h3>
                    </div>
                )}

                </Box>
            </Grommet>

        )
    }
}

export default BlockView