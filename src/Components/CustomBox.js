import React from 'react'
import { Box, Grommet } from 'grommet'

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


export default ({ height }) => {      
    return (
        <Grommet theme={theme}>
            <Box
                elevation="xlarge"
                round="small"
                responsive
                width="800px"
                height="400px"
                margin="medium"
                animation="fadeIn"
                background={{
                  color: 'white',
                  opacity: 'medium'
                }}
            >
                {this.props.children}
            </Box>
        </Grommet>

  )}