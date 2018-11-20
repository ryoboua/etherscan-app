import React from 'react'
import { Box, Grommet } from 'grommet'
import { fromWei } from 'web3-utils'


const theme = {
    global: {
      colors: {
        brand: 'neutral-3',
        accent: {
  
        }
      },
      font: {
        family: 'Roboto',
        size: '14px',
        height: '20px',
      },
    },
    button: {
      border: {
        color: 'status-error',
        width: '3px'
      },
      color: 'black',
      primary: {
        color: 'neutral-4'
      }
    }
  };


export default ({ address, etherBalance, totalTransaction }) => {      
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
            >
              <div style={{padding: '0.5em 2em'}} >
                <h3>
                    Address: {address}
                </h3>
              </div>
              <div style={{padding: '0.5em 2em'}} >
                <h3>
                    Balance: {fromWei(etherBalance, 'ether')}
                </h3>
              </div>
  
              <div style={{padding: '0.5em 2em'}} >
                <h3>
                    Transactions: {totalTransaction}
                </h3>
              </div>
            </Box>
        </Grommet>

  )}