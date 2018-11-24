import React from 'react'
import { Box, Grommet } from 'grommet'
import { Link } from 'react-router-dom'
import { getDate, toNumber } from '../../helpers'
import { hexToNumber } from 'web3-utils'
import theme from '../theme'

export default ({ blockNumber, blockData}) => {      
    return (
        <Grommet theme={theme}>
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
                    margin: '1em auto'
                }}
            >
              <div style={{padding: '0 2em'}} >
                        <h3>
                            Height: {toNumber(blockNumber)}
                        </h3>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h3>
                            Date Mined: {getDate(hexToNumber(blockData.timestamp))}
                        </h3>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h3>
                            Transactions: {blockData.transactions.length}
                        </h3>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h3>
                        TxHash: <Link to={`/tx/${blockData.hash}`} style={{ textDecoration: 'none', color: 'black' }} ><h3 truncate="true">{blockData.hash}</h3></Link>
                        </h3>
                    </div>
                    <div style={{padding: '0 2em'}} >
                        <h3>
                            Mined By: <Link to={`/address/${blockData.miner}`} style={{ textDecoration: 'none', color: 'black' }} >{blockData.miner}</Link>
                        </h3>
                </div>
            </Box>
        </Grommet>

  )}